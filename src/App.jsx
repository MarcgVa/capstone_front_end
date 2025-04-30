import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  HomeScreen,
  FormScreen,
  DashboardScreen,
  ServicePlanScreen,
  ContactUsScreen,
} from "./pages/zPages";

import NavBar from "./components/Navbar";
import './style.css'




function App() {
    
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomeScreen />}></Route>
          <Route path="/service-plans" element={<ServicePlanScreen />}></Route>
          <Route path="/auth/:form" element={<FormScreen />}></Route>
          <Route path="/dashboard" element={<DashboardScreen />}></Route>
          <Route path="/contact" element={<ContactUsScreen />}></Route>
          <Route path="/form/:form" element={<FormScreen/> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
