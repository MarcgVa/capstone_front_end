import { NavLink } from "react-router-dom";
import "./dashboardNav.css"

export default function OperationsNav() {
  
  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        
        <li>
          <NavLink
            to="/dashboard/accounts"
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/tasks"
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/service-plans"
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
