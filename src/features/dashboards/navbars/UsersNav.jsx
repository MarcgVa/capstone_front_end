import { NavLink } from "react-router-dom";
import { getWhoAmI } from "../../../utils/lib";
import "./dashboardNav.css";

export default function UsersNav() {
  const user = getWhoAmI();
  
  
  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        <li>
          <NavLink
            to={`/dashboard/account/${user.id}`}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/dashboard/tasks'
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
