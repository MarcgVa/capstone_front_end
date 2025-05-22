import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {notify} from "../utils/lib";
import { useCreateTaskMutation } from "../slices/tasksSlice";

// TODO : ADD the Consultation service to the API
// Needs to create a new item in the list.

export default function ConsultationForm() {
  const [submitConsultationRequest] = useCreateTaskMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleUpdate = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: "NEW CONSULT REQUEST",
      description: JSON.stringify(formData),
      dueDate: new Date(),
    };

    console.log("payload", payload);

    const response = await submitConsultationRequest(payload).unwrap();
    if (response) {
      notify("success", "Thank you for requesting a consultation!", 2500);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <ToastContainer newestOnTop={true} />
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Grupe Lawncare"
            src={logo}
            className="rounded-full flex  h-30 justify-center sm:h-100 "
          />
          <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-[#567257] text-shadow-xs text-shadow-[#ffa500]">
            Requesting a Consultation
          </h2>
          <p className="mt-3 text-center text-lg font-bold tracking-tight text-zinc-400">
            Please fill out this form and someone will contact you within 48 business
            hours.
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 shadow-lg sm:rounded-lg sm:px-12 ">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-amber-500"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    onChange={handleUpdate}
                    autoComplete="firstName"
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-medium text-amber-500"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    onChange={handleUpdate}
                    autoComplete="lastName"
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-amber-500"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    required
                    onChange={handleUpdate}
                    autoComplete="phone"
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-amber-500 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-amber-500"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleUpdate}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=" btn-req-consult flex w-full mt-5 justify-center rounded-md px-3 py-2.5 text-sm/6 font-semibold text-amber-500 shadow-xs hover:bg-emerald-900 hover:text-emerald-900 "
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
