import AccountsList from "./SubScreens/AccountsList";
import TaskList from "./SubScreens/TaskList";
import Billing from "./SubScreens/Billing";
import Services from "./SubScreens/Services";
import OpsLandingPage from "./SubScreens/OpsLandingPage";
import { useState } from "react";

export default function AdminScreen() {
  const [page, setPage] = useState("");

  const displayMenuPage = (page) => {
    switch (page) {
      case "UsersList":
        return (
          <div>
            {" "}
            <AccountsList />{" "}
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
    }
  };

  return (
    <div className="dashboard-content">
      <div className="sidebar-content">
        <ul className="sidebar">
          <li
            className={`${
              page === "UsersList" ? "sidebar-item active" : "sidebar-item"
            }`}
            onClick={() => {
              setPage("UsersList");
            }}
          >
            Accounts
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
