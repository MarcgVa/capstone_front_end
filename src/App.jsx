import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import {
  HomeScreen,
  FormScreen,
  ServicePlanScreen,
} from "./layout/screens/zScreens";
import DashboardContent from "./features/dashboards/DashboardContent";
import Layout from "./layout/Layout";
import NavBar from "./layout/Navbar";
import TaskList from "./features/tasks/TaskList";
import Task from "./features/tasks/Task";
import AccountCard from "./features/accounts/AccountCard";
import Accounts from "./features/accounts/Accounts";
import "./style.css";
import Billing from "./features/invoices/Billing";
import Services from "./features/plans/Services";
import TechSchedule from "./features/techs/TechSchedule";
import LandingPage from "./features/dashboards/LandingPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<Layout />}></Route>
          <Route index element={<HomeScreen />}></Route>
          <Route path="/services" element={<ServicePlanScreen />}></Route>
          <Route path="/form/:form" element={<FormScreen />}></Route>
          {/* The dashboard and everything displayed in the dashboard is protected */}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardContent />}>
              <Route index element={<LandingPage />}></Route>
              <Route path="accounts" element={<Accounts />}></Route>
              <Route path="account" element={<AccountCard />}></Route>
              <Route path="tasks" element={<TaskList />}></Route>
              <Route path="task" element={<TaskList />}></Route>
              <Route path="invoicing" element={<Billing />}></Route>
              <Route path="invoices" element={<Billing />}></Route>
              <Route path="mgmt/services" element={<Services />}></Route>
              <Route path="service" element={<Services />}></Route>
              <Route path="tech/schedule" element={<TechSchedule />}></Route>
            </Route>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
