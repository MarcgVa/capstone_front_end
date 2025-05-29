import React, { useState} from 'react'
import logo from '../../assets/logo.png'
import { useRegisterMutation } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  });

  const handleUpdate = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(formData).unwrap();
  
    if (response) {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <div className="form-content py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Grupe Lawncare"
            src={logo}
            className="form-image"
          />
          <h2 className="form-title mt-6 text-center text-4xl font-bold tracking-normal text-[#567257] text-shadow-xs text-shadow-[#ffa500]">
            Registration Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="firstName"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="lastName"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Street Address
                </label>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    autoComplete="address"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    autoComplete="city"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  State
                </label>
                <div className="mt-2">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    autoComplete="state"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Zip Code
                </label>
                <div className="mt-2">
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    required
                    autoComplete="zip"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-[#567257]"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    required
                    autoComplete="phone"
                    onChange={handleUpdate}
                    className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className='login-content'>
                <button
                  type="submit"
                  className="login-btn cursor-pointer"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
