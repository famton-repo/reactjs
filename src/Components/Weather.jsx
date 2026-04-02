import React, { useEffect, useState, useRef } from 'react'
import search_icon from '../assets/pic/search.png'
import cloud_icon from '../assets/pic/cloud.png'
import humidity_icon from '../assets/pic/humidity.png'
import wind_icon from '../assets/pic/wind.png'
import clear_icon from '../assets/pic/clear.png'
import drizzle_icon from '../assets/pic/drizzle.png'
import rain_icon from '../assets/pic/rain.png'
import snow_icon from '../assets/pic/snow.png'

const allIcons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
}

const Weather = () => {
  const [weatherdata, setWeatherdata] = useState(false);
const inputRef = useRef();
  const search = async (city) => {
    if(city === ""){
      alert("Enter a city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(!response.ok){
        alert(data.message);
        return;
      }
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherdata({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: data.main.temp,
        location: data.name,
        icon: icon,
      })
    } catch (error) {
      setWeatherdata(false);
      console.error("error while fetching data");
    }
  }

  useEffect(() => {
    search(search);
  }, [])

  return (
    <div className='Weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder='SEARCH' />
        <img src={search_icon} alt="" onClick={()=>search(inputRef.current.value)} />
      </div>
        
        {weatherdata? <>
        
        <img src={weatherdata ? weatherdata.icon : clear_icon} alt="" className='Weather-icon' />
      <p className='temperature'>{weatherdata ? `${Math.floor(weatherdata.temperature)}°C` : ''}</p>
      <p className='location'>{weatherdata ? weatherdata.location : ''}</p>
      <div className="Weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherdata ? `${weatherdata.humidity}%` : ''}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={weatherdata.icon} alt="" />
          <div>
            <p>{weatherdata ? `${weatherdata.windSpeed} km/h` : ''}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>

        </>:<></>}

      

    </div>
  )
}

export default Weather