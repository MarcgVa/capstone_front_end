import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useCreateServicePlanMutation } from '../slices/servicesSlice';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import "./forms.css"

export default function NewServicePlan() {
  const [createNewPlan] = useCreateServicePlanMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    cost: 0,
    cycle: 0,
    code: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => { 
    e.preventDefault();
    console.log('formData', formData);
    const response = await createNewPlan(formData).unwrap();
    if (response) {
      navigate("/dashboard/service-plans");
    }
  };

  const formCancel = (e) => { 
    console.log('formCancel',e);
    const objReset = {
      title: "",
      description: "",
      cost: 0,
      cycle: 0,
      code: "",
    };
    setFormData(objReset);

  }



  return (
    <form onSubmit={handleSubmit} className="nsp-form-container mt-10 pt-10 ">
      <div className="flex flex-col space-y-12 ">
        <h2 className="text-base/7 font-semibold text-white">
          New Service Plan
        </h2>
        <div className="nsp-form-content border-2 border-white/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm/6 font-medium text-white"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="given-name"
                  onChange={handleOnChange}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm/6 font-medium text-white"
              >
                Description of Service
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  onChange={handleOnChange}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="cost"
                className="block text-sm/6 font-medium text-white"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  id="cost"
                  name="cost"
                  type="number"
                  autoComplete="cost"
                  onChange={handleOnChange}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="cycle"
                className="block text-sm/6 font-medium text-white"
              >
                Cycle
              </label>
              <div className="mt-2">
                <input
                  id="cycle"
                  name="cycle"
                  type='number'
                  autoComplete="address-level2"
                  onChange={handleOnChange}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="code"
                className="block text-sm/6 font-medium text-white"
              >
                Code
              </label>
              <div className="mt-2">
                <input
                  id="code"
                  name="code"
                  type="text"
                  autoComplete="code"
                  onChange={handleOnChange}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nsp-btn-container mt-6 flex justify-end gap-x-6">
        <button
          type="button"
          className="text-sm/6 font-semibold text-white"
          onClick={() => {navigate('/dashboard/service-plans')}}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
