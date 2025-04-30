import React, { useEffect, useState } from "react";
import { useLogoutMutation } from "../services/authServices";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  
  const token = window.sessionStorage.getItem('token');

  const handleLogout = async () => {
    try {
      console.log("<------ logout was processed ------>");
      await logout();
      navigate("/home");
    } catch (error) {
      console.error(error.message);      
    }
  };


  return (
    <div className="navbar">
      <div className="space-x-9">
        <NavLink
          to="/"
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
      </div>

      
      <div className="nav-btn">
        <button
          className="btn-consultation"
          onClick={() => navigate("/form/consult")}
        >
          Request Consultation
        </button>

        {token ? (
          <button className="btn-login" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="btn-login" onClick={() => navigate("/auth/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}
