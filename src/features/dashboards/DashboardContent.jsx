import React from 'react'
import DashboardNav from './DashboardNav';
import { Outlet } from 'react-router-dom';
import "./dashboard.css";

export default function DashboardContent() {
  return (
    <div className='dashboard-content'>
      <div className='left-col'>
        <DashboardNav />
      </div>
      <div className='right-col'>
        <Outlet />
      </div>
    </div>
  );
};
