import { NavLink } from "react-router-dom";
import "./dashboardNav.css";

export default function DashboardNav() {

  return (
    <div className="sidebar-content">
      <ul className="sidebar">
        <li>
          <NavLink
            to={"/dashboard/schedule"}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dashboard/tasks"}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
