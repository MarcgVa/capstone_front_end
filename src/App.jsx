import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  HomeScreen,
  LoginScreen,
  DashboardScreen
} from "./pages/zPages";
import NavBar from "./components/Navbar";
import './style.css'



function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/auth/:form" element={<LoginScreen />}></Route>
          <Route path="/dashboard" element={<DashboardScreen />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
