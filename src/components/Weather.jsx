import { openWeather } from "../utils/lib";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;





export default function Weather({ city, state }) {
  const [weather, setWeather] = useState({});
  
  const getForecast = async () => {
    const response = await openWeather(city, state);

    setWeather(response);  
  };


  useEffect(() => {
    getForecast();
  }, [])


  return (
    <div>
      <div>{weather?.current?.weather[0].description }</div>
    </div>
  )
}
