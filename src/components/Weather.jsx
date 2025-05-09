import { getWeatherByCityState } from "../utils/weather";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;





export default function Weather({ city, state }) {
  const [weather, setWeather] = useState({});
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherTemp, setWeatherTemp] = useState();
  




  const getForecast = async () => {

    const {data:response} = await getWeatherByCityState(city, state);

    console.log('weather,jsx', response);

    const icon = response.current.weather[0].icon;
    setWeather(response.current.weather[0].description);  
    setWeatherIcon(`http://openweathermap.org/img/wn/${icon}@4x.png`);
    setWeatherTemp(Math.round(response.current.temp,2));
  };


  useEffect(() => {
    getForecast();
  }, [])


  return (
    <div className="account-details-weather bento-weather">
      <img src={weatherIcon} alt={weather} />
      <div className="account-details-weather bento-weather">{`${weatherTemp}°`}</div>
    </div>
  );
}
