import React from "react";
import RegistrationForm from "../../features/auth/RegistrationForm";
import LoginForm from "../../features/auth/LoginForm";
import ConsultationForm from "../../components/ConsultationForm";

import { useParams } from "react-router-dom";

export default function FormScreen() {
  const { form } = useParams();

  const formDisplay = (form) => {
    switch (form) {
      case "login":
        return (
          <div>
            {" "}
            <LoginForm />{" "}
          </div>
        );
      case "register":
        return (
          <div>
            <RegistrationForm />
          </div>
        );
      case "consult":
        return (
          <div>
            <ConsultationForm />
          </div>
        );
      default:
        break;
    }
  };

  return <div className="form-content">{formDisplay(form)}</div>;
}
