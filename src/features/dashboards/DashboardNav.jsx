import { NavLink } from "react-router-dom";
import "./dashboardNav.css"

export default function DashboardNav() {
  const role = window.sessionStorage.getItem("role").toLowerCase();


  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        
        <li>
          <NavLink
            to={role === "user" ? "/dashboard/account" : "/dashboard/accounts"}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to={role === "user" ? "/dashboard/task" : "/dashboard/tasks"}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to={
              role === "user" ? "/dashboard/invoices" : "/dashboard/invoicing"
            }
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Invoices
          </NavLink>
        </li>
        <li>
          <NavLink
            to={role === "user" ? "/dashboard/service" : "/dashboard/services"}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Plans
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
