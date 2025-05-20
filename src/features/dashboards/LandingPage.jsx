import {getRole} from '../../utils/lib';
import React from 'react'
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
    <div className='flex flex-row border-2 h-full w-full justify-center align-middle'>{displayLandingPage()}</div>
  )
}
