import React from 'react'
import OperationsNav from './navbars/OperationsNav';
import TechNav from './navbars/TechNav';
import UsersNav from './navbars/UsersNav';
import { Outlet } from 'react-router-dom';
import "./dashboard.css";


export default function DashboardContent() {
  const role = window.sessionStorage.getItem('role').toLowerCase();

  const displayNavBar = () => {

    switch (role) {
      case 'manager':
        return (
          <div className="left-col">
            <OperationsNav />
          </div>
        );
      case 'tech':
        return (
          <div className="left-col">
            <TechNav />
          </div>
        );
      case 'user':
        return (
          <div className="left-col">
            <UsersNav />
          </div>
        );
      default:
        break;
    }
  };


  return (
    <div className='dashboard-content'>
        {displayNavBar()}
      <div className='right-col'>
        <Outlet />
      </div>
    </div>
  );
};
