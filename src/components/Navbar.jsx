import React from "react";
import { useLogoutMutation } from "../slices/authSlice";
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
      navigate("/");
    } catch (error) {
      console.error(error.message);      
    }
  };


  return (
    <header>
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#ffa500] hover:text-[#ffa500]"
                  : "hover:text-[#ffa500] default: border-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/service-plans"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#ffa500] hover:text-[#ffa500]"
                  : "hover:text-[#ffa500] default: border-transparent"
              }
            >
              Service Plans
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-b-[#ffa500] hover:text-[#ffa500]"
                  : "hover:text-[#ffa500] default: border-transparent"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        <div className="nav-btn">
          {!token ? (
            <button
              className="btn-consultation"
              onClick={() => navigate("/form/consult")}
            >
              Request Consultation
            </button>
          ) : (
            <button
              className="btn-consultation hidden"
              onClick={() => navigate("/form/consult")}
            >
              Request Consultation
            </button>
          )}

          {token ? (
            <button className="btn-login" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className="btn-login"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
