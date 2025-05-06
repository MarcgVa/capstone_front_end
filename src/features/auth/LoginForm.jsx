import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useLoginMutation } from "../../slices/authSlice";
import { useState } from "react";
import "../../components/forms/forms.css";






export default function LoginForm() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleUpdate = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData).unwrap();
    if (response) {
      navigate("/");
    }
  };

  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Grupe Lawncare"
            src={logo}
            className="form-image rounded-full flex  h-30 justify-center sm:h-100 "
          />
          <h2 className="form-title mt-10 text-center text-4xl font-bold tracking-tight text-[#567257] text-shadow-xs text-shadow-[#ffa500]">
            Login
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ffa500] sm:text-sm/6"
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#567257] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#ffa500] sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="login-content">
                <button
                  type="submit"
                  className="login-btn text-[#567257] hover:text-[#ffa500] cursor-pointer"
                >
                  Sign in
                </button>
                <div className="registration-question inline-flex">
                  <h2 className="p-4 text-[#ffa500] ">
                    New client or want to be?
                  </h2>
                  <button
                    className="cursor-pointer"
                    onClick={() => navigate("/form/register")}
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
