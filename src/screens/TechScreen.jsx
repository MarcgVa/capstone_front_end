import UserCard from "../../components/dashboard/UserCard";
import TaskList from "../SubScreens/TaskList";
import Billing from "../SubScreens/Billing";
import Services from "../SubScreens/Services";
import OpsLandingPage from "../SubScreens/OpsLandingPage";
import { useState } from "react";

export default function TechScreen() {
  const [page, setPage] = useState("");

  const displayMenuPage = (page) => {
    switch (page) {
      case "Profile":
        return (
          <div>
            {" "}
            <UserCard />
          </div>
        );
      case "TaskList":
        return (
          <div>
            <TaskList />
          </div>
        );
      case "Billing":
        return (
          <div>
            <Billing />
          </div>
        );
      case "Services":
        return (
          <div>
            <Services />
          </div>
        );

      default:
        return (
          <div>
            <OpsLandingPage />
          </div>
        );
        break;
    }
  };

  return (
    <div className="dashboard-content">
      <div className="sidebar-content">
        <ul className="sidebar">
          <li
            className={`${
              page === "Profile" ? "sidebar-item active" : "sidebar-item"
            }`}
            onClick={() => {
              setPage("Profile");
            }}
          >
            Accounts
          </li>
          <li
            className={`${
              page === "Billing" ? "sidebar-item active" : "sidebar-item"
            }`}
            onClick={() => {
              setPage("Billing");
            }}
          >
            Billing
          </li>
          <li
            className={`${
              page === "TaskList" ? "sidebar-item active" : "sidebar-item"
            }`}
            onClick={() => {
              setPage("TaskList");
            }}
          >
            Tasks
          </li>
          <li
            className={`${
              page === "Services" ? "sidebar-item active" : "sidebar-item"
            }`}
            onClick={() => {
              setPage("Services");
            }}
          >
            Services
          </li>
        </ul>
      </div>
      <div className="page-content">{displayMenuPage(page)}</div>
    </div>
  );
}
