import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;





export default function Weather({ city, state }) {
  const [weather, setWeather] = useState({});

  const limit = 1;


  const getWeather = async () => {
    const { data }= await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${API_KEY}`
    );

    const { data: data2} = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly&appid=${API_KEY}`
    );
    
    setWeather(data2)
  }


  useEffect(() => {
    getWeather();
  },[])


  return (
    <div>
      <div>{weather?.current?.weather[0].description }</div>
    </div>
  )
}
