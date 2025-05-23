import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;



const getWeather = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}&units=imperial&lang=en`
  );

  return response;
};



const getWeatherByZip = async (zip) => {
  const { data: response } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`
  );

  return getWeather(response.lat, response.lon);
  
};


const getWeatherByCityState = async (city, state, limit = 1) => {
  const { data:response } = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${API_KEY}`
  );

  console.log('byCity',response[0])

  return getWeather(response[0].lat, response[0].lon);
};


export { getWeatherByZip, getWeatherByCityState };