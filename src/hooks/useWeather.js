import { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import {
  kelvinToCelsius,
  MOCK_WEATHER,
  MOCK_AQI,
  MOCK_FORECAST,
  MOCK_HOURLY,
  getAqiLabel,
  formatDate,
  getWeatherEmoji,
} from '../utils/weatherHelpers';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

function mapWeather(wd) {
  return {
    temp: wd.main.temp,
    feelsLike: wd.main.feels_like,
    description: wd.weather[0].description,
    conditionCode: wd.weather[0].id,
    icon: wd.weather[0].icon,
    main: wd.weather[0].main,
    humidity: wd.main.humidity,
    pressure: wd.main.pressure,
    visibility: (wd.visibility / 1000).toFixed(1),
    windSpeed: wd.wind.speed,
    sunrise: wd.sys.sunrise,
    sunset: wd.sys.sunset,
    city: wd.name,
    country: wd.sys.country,
    coord: wd.coord,
  };
}

function mapMockWeather() {
  return {
    temp: MOCK_WEATHER.temp,
    feelsLike: MOCK_WEATHER.feels_like,
    description: MOCK_WEATHER.description,
    conditionCode: 802,
    icon: MOCK_WEATHER.icon,
    main: 'Clouds',
    humidity: MOCK_WEATHER.humidity,
    pressure: MOCK_WEATHER.pressure,
    visibility: (MOCK_WEATHER.visibility / 1000).toFixed(1),
    windSpeed: MOCK_WEATHER.wind_speed,
    sunrise: MOCK_WEATHER.sunrise,
    sunset: MOCK_WEATHER.sunset,
    city: MOCK_WEATHER.city,
    country: MOCK_WEATHER.country,
    coord: { lat: -6.12, lon: 106.15 },
  };
}

function mapMockForecast() {
  return MOCK_FORECAST.map(f => ({
    date: formatDate(f.dt),
    temp: f.temp,
    tempMin: f.temp_min,
    description: f.description,
    emoji: getWeatherEmoji(f.icon),
  }));
}

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [severeWeather, setSevereWeather] = useState(false);
  const initialLoad = useRef(true);

  const fetchByQuery = useCallback(async (query) => {
    if (!API_KEY) {
      // Mock mode — return a promise so await works properly in searchCity
      await new Promise((resolve) => {
        setTimeout(() => {
          setWeather(mapMockWeather());
          setAqi({ value: MOCK_AQI.aqi, label: getAqiLabel(MOCK_AQI.aqi), pm25: MOCK_AQI.pm25 });
          setForecast(mapMockForecast());
          setHourly(MOCK_HOURLY);
          setSevereWeather(false);
          resolve();
        }, 800);
      });
      return;
    }

    try {
      setError(null);

      // Fetch current weather
      const weatherRes = await axios.get(`${BASE_URL}/weather`, {
        params: { q: query, appid: API_KEY, units: 'metric' },
      });
      const wd = weatherRes.data;
      const mapped = mapWeather(wd);
      setWeather(mapped);

      // Severe weather check (thunderstorm 2xx, extreme)
      setSevereWeather(wd.weather[0].id >= 200 && wd.weather[0].id < 300);

      // Fetch AQI
      try {
        const aqiRes = await axios.get(`${BASE_URL}/air_pollution`, {
          params: { lat: wd.coord.lat, lon: wd.coord.lon, appid: API_KEY },
        });
        const aqiData = aqiRes.data.list[0];
        const aqiValue = aqiData.components.pm2_5 ? Math.round(aqiData.components.pm2_5 * 10) : aqiData.main.aqi * 50;
        setAqi({ value: aqiValue, label: getAqiLabel(aqiValue), pm25: aqiData.components.pm2_5 });
      } catch {
        setAqi({ value: MOCK_AQI.aqi, label: getAqiLabel(MOCK_AQI.aqi), pm25: MOCK_AQI.pm25 });
      }

      // Fetch 5-day forecast
      const forecastRes = await axios.get(`${BASE_URL}/forecast`, {
        params: { q: query, appid: API_KEY, units: 'metric' },
      });

      // Daily forecast
      const dailyMap = {};
      forecastRes.data.list.forEach(item => {
        const date = formatDate(item.dt);
        if (!dailyMap[date]) {
          dailyMap[date] = {
            date,
            temp: item.main.temp_max,
            tempMin: item.main.temp_min,
            description: item.weather[0].main,
            emoji: getWeatherEmoji(item.weather[0].icon),
          };
        } else {
          dailyMap[date].temp = Math.max(dailyMap[date].temp, item.main.temp_max);
          dailyMap[date].tempMin = Math.min(dailyMap[date].tempMin, item.main.temp_min);
        }
      });
      setForecast(Object.values(dailyMap).slice(1, 6));

      // Hourly → Morning/Afternoon/Evening/Night
      const slots = { Morning: null, Afternoon: null, Evening: null, Night: null };
      const slotHours = { Morning: 6, Afternoon: 12, Evening: 18, Night: 21 };
      const slotEmojis = { Morning: '🌅', Afternoon: '☀️', Evening: '🌥️', Night: '🌙' };

      forecastRes.data.list.forEach(item => {
        const h = new Date(item.dt * 1000).getHours();
        if (!slots.Morning && h >= 5 && h < 12) {
          slots.Morning = { period: 'Morning', temp: item.main.temp, icon: getWeatherEmoji(item.weather[0].icon) };
        }
        if (!slots.Afternoon && h >= 12 && h < 17) {
          slots.Afternoon = { period: 'Afternoon', temp: item.main.temp, icon: getWeatherEmoji(item.weather[0].icon) };
        }
        if (!slots.Evening && h >= 17 && h < 21) {
          slots.Evening = { period: 'Evening', temp: item.main.temp, icon: getWeatherEmoji(item.weather[0].icon) };
        }
        if (!slots.Night && (h >= 21 || h < 5)) {
          slots.Night = { period: 'Night', temp: item.main.temp, icon: getWeatherEmoji(item.weather[0].icon) };
        }
      });

      const hourlyData = [
        { period: 'Now', temp: mapped.temp, icon: getWeatherEmoji(wd.weather[0].icon) },
        ...Object.keys(slots)
          .filter(period => slots[period])
          .map(period => slots[period])
      ];
      setHourly(hourlyData);

    } catch (err) {
      console.error('Weather API error:', err.response?.data || err.message);
      const errorMessage = err.response?.data?.message || err.message;
      setError(`Could not find "${query}" (${errorMessage}) — using fallback data`);
      setWeather(mapMockWeather());
      setAqi({ value: MOCK_AQI.aqi, label: getAqiLabel(MOCK_AQI.aqi), pm25: MOCK_AQI.pm25 });
      setForecast(mapMockForecast());
      setHourly(MOCK_HOURLY);
      setSevereWeather(false);
    }
  }, []);

  const fetchByCoords = useCallback(async (lat, lon) => {
    if (!API_KEY) {
      await fetchByQuery('India');
      return;
    }

    try {
      setError(null);
      // Reverse geocode
      const geoRes = await axios.get(`${GEO_URL}/reverse`, {
        params: { lat, lon, limit: 1, appid: API_KEY },
      });
      const cityName = geoRes.data[0]?.name || 'Unknown';
      const country = geoRes.data[0]?.country || '';
      await fetchByQuery(`${cityName},${country}`);
    } catch {
      await fetchByQuery('Banten,ID');
    }
  }, [fetchByQuery]);

  // Search function exposed to Header
  const searchCity = useCallback(async (query) => {
    if (!query?.trim()) return;
    setSearching(true);
    setLoading(true);
    await fetchByQuery(query.trim());
    setLoading(false);
    setSearching(false);
  }, [fetchByQuery]);

  // Initial load — try geolocation, fallback to Banten,ID
  useEffect(() => {
    if (!initialLoad.current) return;
    initialLoad.current = false;

    async function init() {
      setLoading(true);

      if (navigator.geolocation && API_KEY) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            await fetchByCoords(pos.coords.latitude, pos.coords.longitude);
            setLoading(false);
          },
          async () => {
        await fetchByQuery('India');
            setLoading(false);
          },
          { timeout: 5000 }
        );
      } else {
        await fetchByQuery('Banten,ID');
        setLoading(false);
      }
    }

    init();
  }, [fetchByQuery, fetchByCoords]);

  return { weather, aqi, forecast, hourly, loading, searching, error, severeWeather, searchCity };
}
