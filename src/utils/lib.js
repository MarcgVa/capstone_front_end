import { toast, Bounce, Slide } from "react-toastify";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


const getRole = () => {
  return window.sessionStorage.getItem("role").toLowerCase();
};


const notify = (type, message, timeout) => {
  toast(message, {
    type: type,
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: true,
    progress: undefined,
    closeOnClick: true,
    rtl: true,
    theme: "colored",
    transition: Bounce,
  });
};


const openWeather = async (city, state, limit=1, ) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${API_KEY}`
  );

  const { data: weather } = await axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,minutely&appid=${API_KEY}&units=imperial&lang=en`
  );

  return weather;
};


export { getRole, notify, openWeather };