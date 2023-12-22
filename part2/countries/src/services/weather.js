import axios from 'axios'
const api_key = import.meta.env.VITE_WEATHER_KEY;
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

function getAll(city) {
  const request = axios.get(`${baseURL}?q=${city}&appid=${api_key}`);
  
  return request.then((response) => {
    console.log('promise fulfilled');
    return response.data;
  })
}

export default {getAll};