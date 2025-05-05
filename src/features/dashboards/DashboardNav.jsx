import { NavLink } from "react-router-dom";
import "./dashboardNav.css"

export default function DashboardNav() {
  const role = window.sessionStorage.getItem("role").toLowerCase();


  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        <li>
          {role === "user" ? (
            <NavLink
              to="/dashboard/account"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Account
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard/accounts"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Accounts
            </NavLink>
          )}
        </li>
        <li>
          {role === "user" ? (
            <NavLink
              to="/dashboard/tasks"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              My Tasks
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard/tasks"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Tasks
            </NavLink>
          )}
        </li>
        <li>
          {role === "user" ? (
            <NavLink
              to="/dashboard/invoicing"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Invoices
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard/invoicing"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Invoicing
            </NavLink>
          )}
        </li>
        <li>
          {role === "user" ? (
            <NavLink
              to="/dashboard/services"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Plans
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard/services"
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              Manage Services 
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
}
