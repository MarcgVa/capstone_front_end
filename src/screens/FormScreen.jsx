import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";
import LoginForm from "../components/forms/LoginForm";
import ConsultationForm from "../components/forms/ConsultationForm";

import { useParams } from "react-router-dom";

export default function FormScreen() {

  const { form } = useParams();
  
  

  const formDisplay = (form) => {
      switch (form) {
        case "login":
          return <div> <LoginForm /> </div>
        case "register":
          return <div><RegistrationForm /></div>;
        case "consult":
          return <div><ConsultationForm /></div>
        default:
          break;
      }
}

  return (
    <>
      { formDisplay(form)}
    </>
  );
}
