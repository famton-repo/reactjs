// Weather helper utilities

// Map OpenWeatherMap icon codes to emoji
export function getWeatherEmoji(iconCode) {
  const map = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️',
  };
  return map[iconCode] || '☀️';
}

// Map weather condition to card background gradient class
export function getWeatherBgClass(main) {
  const condition = (main || '').toLowerCase();
  if (condition.includes('rain') || condition.includes('drizzle')) {
    return 'from-green-200 to-green-100';
  }
  if (condition.includes('cloud')) {
    return 'from-yellow-100 to-amber-100';
  }
  if (condition.includes('snow')) {
    return 'from-blue-100 to-blue-50';
  }
  if (condition.includes('thunder')) {
    return 'from-purple-200 to-purple-100';
  }
  return 'from-yellow-100 to-amber-100'; // default sunny/clear
}

// Format temperature (Kelvin → Celsius)
export function kelvinToCelsius(k) {
  return Math.round(k - 273.15);
}

// Format Unix timestamp to time string
export function formatTime(unix) {
  const d = new Date(unix * 1000);
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

// Format Unix timestamp to date string
export function formatDate(unix) {
  const d = new Date(unix * 1000);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

// Get AQI label
export function getAqiLabel(aqi) {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Standard';
  if (aqi <= 150) return 'Moderate';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
}

// Get AQI tab index (0=Good, 1=Standard, 2=Hazardous)
export function getAqiTabIndex(aqi) {
  if (aqi <= 100) return 0;
  if (aqi <= 200) return 1;
  return 2;
}

// Map time-of-day period from hour
export function getTimePeriod(hour) {
  if (hour >= 5 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 17) return 'Afternoon';
  if (hour >= 17 && hour < 21) return 'Evening';
  return 'Night';
}

// Get weather emoji for time period data
export function getPeriodEmoji(period) {
  const map = {
    'Morning': '🌅',
    'Afternoon': '☀️',
    'Evening': '🌥️',
    'Night': '🌙',
  };
  return map[period] || '☀️';
}

// Mock data for when no API key is available
export const MOCK_WEATHER = {
  temp: 38, // Direct Celsius value (results in ~100.4°F)
  feels_like: 38,
  description: 'Sunny',
  icon: '01d',
  humidity: 40,
  pressure: 1013,
  visibility: 10000,
  wind_speed: 3.5,
  sunrise: Math.floor(Date.now() / 1000) - 21600,
  sunset: Math.floor(Date.now() / 1000) + 21600,
  city: 'India',
  country: 'IN',
};

export const MOCK_AQI = {
  aqi: 390,
  pm25: 2.5,
};

export const MOCK_FORECAST = [
  { dt: Math.floor(Date.now() / 1000) + 86400, temp: 38, description: 'Cloudy', icon: '03d', temp_min: 32 },
  { dt: Math.floor(Date.now() / 1000) + 172800, temp: 39, description: 'Bright', icon: '01d', temp_min: 33 },
  { dt: Math.floor(Date.now() / 1000) + 259200, temp: 37, description: 'Rainy', icon: '10d', temp_min: 31 },
  { dt: Math.floor(Date.now() / 1000) + 345600, temp: 40, description: 'Sunny', icon: '01d', temp_min: 34 },
  { dt: Math.floor(Date.now() / 1000) + 432000, temp: 38, description: 'Cloudy', icon: '04d', temp_min: 32 },
];

export const MOCK_HOURLY = [
  { period: 'Morning', temp: 36, icon: '🌅' },
  { period: 'Afternoon', temp: 38, icon: '☀️' },
  { period: 'Evening', temp: 37, icon: '🌥️' },
  { period: 'Night', temp: 35, icon: '🌙' },
];
