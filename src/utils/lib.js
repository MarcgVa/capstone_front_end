import { toast, Bounce, Slide } from "react-toastify";

const getRole = () => {
  return window.sessionStorage.getItem('role').toLowerCase();
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
    theme: 'colored',
    transition: Bounce,
  });
};



export { getRole, notify };
