import React, { useState, useEffect } from 'react';
import requestWeather from "../services/weather.js";

function Weather({ city }) {
  const [weather, setWeather] = useState('');
  console.log(city);

  useEffect(() => {
    console.log('effect');
    requestWeather.getAll(city).then(response => {
      console.log(response);
      setWeather(response);
    })
  }, []);
  console.log('render', weather, 'weather');

  return (
    <>
      <p><strong>Weather in {city}</strong></p>
      {weather ? <>
        <div>temperature {(weather.main.temp-273).toFixed(2)} Celcius</div>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon' />
        <p><strong>Wind:</strong> {(weather.wind.speed)} m/s</p>
        <div></div>
      </> :
        <p>Loading weather data...</p>}
    </>
  )
}

export default Weather;