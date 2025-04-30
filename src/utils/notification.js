import { toast, Bounce, Slide } from "react-toastify";

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
}



export default notify;