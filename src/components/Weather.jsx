import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud sun.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humitidy.png'
import sun_icon from '../assets/.sun.png'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    const search = async (city) => {
        if (!city || !city.trim()) return;
        setError(null);
        try {
            const url = `https://wttr.in/${city.trim()}?format=j1`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            const newWeatherData = {
                humidity: data.current_condition[0].humidity,
                windSpeed: data.current_condition[0].windspeedKmph,
                temperature: data.current_condition[0].temp_C,
                location: city,
                description: data.current_condition[0].weatherDesc[0].value,
            };
            setWeatherData(newWeatherData);
        } catch (err) {
            setError('City not found. Please try again.');
            setWeatherData(null);
        }
    }

    const handleSearch = () => {
        search(inputRef.current.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            search(inputRef.current.value);
        }
    }

    useEffect(() => {
        search("theni");
    }, [])

    return (
        <div className='Weather'>
            <div className="search-bar">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder='Search city...'
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={search_icon}
                    alt="search"
                    onClick={handleSearch}
                />
            </div>

            {error && <p style={{ color: '#fff', marginTop: '10px' }}>{error}</p>}

            {weatherData ? (
                <>
                    <img src={cloud_icon} alt="weather icon" className='Weather-icon' />
                    <p className='temperature'>{weatherData.temperature}°C</p>
                    <p className='location'>{weatherData.location}</p>
                    <p style={{ color: '#fff', fontSize: '18px', marginBottom: '10px' }}>
                        {weatherData.description}
                    </p>
                    <div className='weather-data'>
                        <div className='col'>
                            <img src={humidity_icon} alt="humidity" />
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className='col'>
                            <img src={wind_icon} alt="wind" />
                            <div>
                                <p>{weatherData.windSpeed} km/h</p>
                                <span>Wind Speeds</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                !error && <p style={{ color: '#fff', marginTop: '30px' }}>Loading...</p>
            )}
        </div>
    )
}

export default Weather
