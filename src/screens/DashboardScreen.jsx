import React from 'react'
import OperationsScreen from './dashboards/OperationsScreen'
import UserScreen from './dashboards/UserScreen'
import TechScreen from './dashboards/TechScreen'
import AdminScreen from './dashboards/AdminScreen';


export default function DashboardScreen() { 

  const role = window.sessionStorage.getItem('role').toLowerCase();

  const displayDashboard = (role) => {
    switch (role) {
      case "user":
        return <div> <UserScreen /> </div>
      case "tech":
        return <div><TechScreen /></div>;
      case "manager":
        return <div><OperationsScreen /></div>
      case "admin":
        return <div><AdminScreen /></div>

      default:
        break;
    };
  };
  
  return (
    
    <div className='dashboard-content'>{displayDashboard(role) }</div>
  )
}
