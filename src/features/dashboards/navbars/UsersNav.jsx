import { NavLink } from "react-router-dom";
import "./dashboardNav.css";

export default function UsersNav() {
  
  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        <li>
          <NavLink
            to='/dashboard/account'
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/task'
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Messages
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
