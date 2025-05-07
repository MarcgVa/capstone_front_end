import {getRole} from '../../utils/lib';
import React from 'react'
import logo from '../../assets/logo.png';
import BentoDashboard from './BentoDashboard';
import LogoSplashScreen from '../../layout/screens/LogoSplashScreen';
import "./dashboard.css";




export default function LandingPage() {
  const role = getRole();



  const displayLandingPage = () => { 
    switch (role) {
      case 'manager':
        return (
          <div>
            <BentoDashboard />
          </div>
        );
        
      case 'user':
        return (
          <div>
            <LogoSplashScreen/>
          </div>
        );
    
      case 'tech':
        return (
          <div>
            <LogoSplashScreen/>
          </div>

        );
      default:
        break;
    }
  };

  return (
    <div>{displayLandingPage()}</div>
  )
}
