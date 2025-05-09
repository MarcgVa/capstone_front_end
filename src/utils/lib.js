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




export { getRole, notify };