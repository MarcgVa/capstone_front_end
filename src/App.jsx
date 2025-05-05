import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomeScreen,FormScreen,DashboardScreen,ServicePlanScreen,ContactUsScreen,} from "./screens/zScreens";
import NavBar from "./components/Navbar";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import "./style.css";
import AccountCard from "./components/dashboard/AccountCard";



function App() {
    
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/service-plans" element={<ServicePlanScreen />}></Route>
          <Route path="/auth/:form" element={<FormScreen />}></Route>
          <Route path="/form/:form" element={<FormScreen />}></Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardScreen />}></Route>
          </Route>
          <Route path="/dashboard" element={<DashboardScreen />}></Route>
          <Route path="/contact" element={<ContactUsScreen />}></Route>
          <Route path="/dashboard/account" element={<AccountCard /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
