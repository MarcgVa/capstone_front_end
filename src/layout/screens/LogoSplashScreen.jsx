import React from 'react'
import logo from '../../assets/logo.png';
import '../../features/dashboards/dashboard.css';


export default function LogoSplashScreen() {
  return (
    <div className="logo-page">
        <img  className='size-100' src={logo} />
    </div>
  );
}
