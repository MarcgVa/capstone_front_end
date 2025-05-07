import React from 'react'
import DashboardNav from './DashboardNav';
import TechNav from './TechNav';
import { Outlet } from 'react-router-dom';
import "./dashboard.css";

export default function DashboardContent() {
  const role = window.sessionStorage.getItem('role').toLowerCase();

  const displayNavBar = () => {
    if (role === 'tech') { 
      return (
        <div className="left-col">
          <TechNav />
        </div>
      );
    } else {
      return (
        <div className="left-col">
          <DashboardNav />
        </div>
      );
    }
  }

  return (
    <div className='dashboard-content'>
        {displayNavBar()}
      <div className='right-col'>
        <Outlet />
      </div>
    </div>
  );
};
