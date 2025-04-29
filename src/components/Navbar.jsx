import React, { useEffect, useState } from "react";
import { useLogoutMutation } from "../services/authServices";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();




  const handleLogout = async () => {
    setIsLoggedIn('false');
    localStorage.removeItem('token');
    localStorage.setItem('glcl', false);
    try {
      console.log("<------ logout was processed ------>");
      await logout();
      navigate("/home");
    } catch (error) {
      console.error(error.message);      
    }
  };
  
  useEffect(() => {
    setIsRegistered(localStorage.getItem('glcr'));
    setIsLoggedIn(localStorage.getItem('glcl'));
  }, []);


  return (
    <div className="navbar">
      <div className="space-x-9">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/service-plans"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          Service Plans
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={isRegistered === "false" ? "/auth/register" : "/auth/login"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          {isRegistered === "false" ? "Register" : "Login"}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          Contact Us
        </NavLink>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className={
            isLoggedIn === "true"
              ? "bg-[#E5B141] text-[#2A2420] text-xs p-1 px-2 font-bold rounded-full"
              : "hidden"
          }
        >
          Logout
        </button>
      </div>
      <div>
        <button
          className={isLoggedIn === true ? "hidden" : "request-consultation"}
        >
          Request Consultation
        </button>
      </div>
    </div>
  );
}
