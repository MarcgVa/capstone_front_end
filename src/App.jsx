import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  HomeScreen,
  LoginScreen,
  DashboardScreen,
  ServicePlanScreen,
  ContactUsScreen,
} from "./pages/zPages";
import Cookies from "universal-cookie"
import NavBar from "./components/Navbar";
import './style.css'



function App() {
  const cookies = new Cookies();
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/service-plans" element={<ServicePlanScreen />}></Route>
          <Route path="/auth/:form" element={<LoginScreen />}></Route>
          <Route path="/dashboard" element={<DashboardScreen />}></Route>
          <Route path="/contact" element={<ContactUsScreen />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
