import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

export default function NavBar() {



  return (
    <div className="Navbar flex flex-row justify-between m-0 p-16 z-100 sticky top-0 left-0">
      <div className="flex justify-start">
        <img src={logo} alt="" className="h-10 rounded-full" />
      </div>
      <div className="space-x-9">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-green-600"
              : "hover:text-gray-400 default: border-transparent"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/service-plans"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-green-600"
              : "hover:text-gray-400 default: border-transparent"
          }
        >
          Service Plans
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-green-600"
              : "hover:text-gray-400 default: border-transparent"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="auth/register"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-green-600"
              : "hover:text-gray-400 default: border-transparent"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-b-green-600"
              : "hover:text-gray-400 default: border-transparent"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
}
