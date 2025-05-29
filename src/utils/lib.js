import { toast, Bounce, Slide } from "react-toastify";
import { jwtDecode } from "jwt-decode";

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

const getWhoAmI = () => { 
  const token = window.sessionStorage.getItem('token');
  return jwtDecode(token);
}

const setDateLocale = (date) => {
  const newDate = new Date(date).toLocaleDateString();

  if (newDate !== "12/31/1969") {
    return newDate;
  } else { 
    return null; 
  }
}


export { getRole, notify, getWhoAmI, setDateLocale};