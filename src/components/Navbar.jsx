import React,{useEffect, useState} from "react";
import { NavLink } from "react-router-dom";



export default function NavBar() {
  const [isRegistered, setIsRegistered] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();

  console.log('loggedIn',isLoggedIn);

  useEffect(() => {
    setIsRegistered(localStorage.getItem('gsar'));
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
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
          to={
            !isRegistered === "true"
              ? "/auth/register"
              : isLoggedIn === "true"
              ? "/auth/logout"
              : "/auth/login"
          }
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-[#2A2420] hover:text-[#ffa500]"
              : "hover:text-[#ffa500] default: border-transparent"
          }
        >
          {!isRegistered === "true"
            ? "Register"
            : isLoggedIn === "true"
            ? "Logout"
            : "Login"}
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
        <button className={isLoggedIn === 
          true ? "hidden" : "request-consultation"}>Request Consultation</button>
      </div>
    </div>
  );
}
