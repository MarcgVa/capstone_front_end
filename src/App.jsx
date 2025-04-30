import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomeScreen,FormScreen,DashboardScreen,ServicePlanScreen,ContactUsScreen,} from "./pages/zPages";
import NavBar from "./components/Navbar";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import "./style.css";



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
        </Routes>
      </Router>
    </>
  );
}

export default App
