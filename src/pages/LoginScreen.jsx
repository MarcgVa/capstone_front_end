import React from 'react';
import RegistrationForm from '../components/auth/RegistrationForm';
import LoginForm from '../components/auth/LoginForm';
import { useParams } from 'react-router-dom';


export default function LoginScreen() {
  const { form } = useParams();
  
  return (
    <div>
      <p>{form}</p>
      {
        form === 'login' ? <LoginForm /> : <RegistrationForm />
      }
    </div>
  );
}
