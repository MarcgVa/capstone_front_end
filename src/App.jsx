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
import AccountDetailsCard from "./features/accounts/AccountDetailsCard";
import Accounts from "./features/accounts/Accounts";
import "./style.css";
import Billing from "./features/invoices/Billing";
import ServicesList from "./features/plans/ServicesList";
import Services from "./features/plans/Services";
import TechSchedule from "./features/techs/TechSchedule";
import LandingPage from "./features/dashboards/LandingPage";
import ServicePlanDetails from "./features/plans/ServicePlanDetails";
import TaskLanding from "./features/tasks/TaskLanding";
import UserEditScreen from "./features/accounts/UserEditScreen";
import Map from "./components/Map";
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
          <Route path="/map" element={<Map />}></Route>

          {/* The dashboard and everything displayed in the dashboard is protected */}
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardContent />}>
              <Route index element={<LandingPage />}></Route>
              <Route path="accounts" element={<Accounts />}></Route>
              <Route path="account/:id" element={<AccountDetailsCard />}></Route>
              <Route path="tasks" element={<TaskList />}>
                <Route index element={<TaskLanding/>}></Route>
                <Route path="task/:id" element={<Task />}></Route>
              </Route>
              <Route path="invoicing" element={<Billing />}></Route>
              <Route path="invoices" element={<Billing />}></Route>
              <Route path="service-plans" element={<ServicePlanDetails />}></Route>
              <Route path="services" element={<Services />}></Route>

              <Route path="service-list" element={<ServicesList />}></Route>
              <Route path="tech/schedule" element={<TechSchedule />}></Route>
              <Route path="edit/user/:id" element={<UserEditScreen /> }></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
