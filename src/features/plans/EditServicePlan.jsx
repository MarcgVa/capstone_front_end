import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useGetServicePlansQuery, useUpdateServicePlanMutation } from '../../slices/servicesSlice';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {useEffect, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../../components/forms.css";
import { FadeLoader } from 'react-spinners';

export default function EditServicePlan() {
  const { id } = useParams();
  const { status, isSuccess, isLoading, data} = useGetServicePlansQuery(id);
  const [updateServicePlan] = useUpdateServicePlanMutation();
  const navigate = useNavigate();
  const [plan, setPlan] = useState({
    servicePlanId:id,
    title: "",
    description: "",
    cost: 0,
    cycle: 0,
    code: "",
  });

  const handleOnChange = (e) => {
    setPlan((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => { 
    e.preventDefault();
    console.log('plan', plan);
    const response = await updateServicePlan(plan).unwrap();
    if (response) {
      navigate("/dashboard/service-plans");
    }
  };

  useEffect(() => { 
    if (status === 'fulfilled') {
      setPlan(data);
    }
  },[status])


  return (
    <>
      {isLoading ? <FadeLoader color="#ffa500" className="spinner" /> : null}
      {isSuccess && (
        <form
          onSubmit={handleSubmit}
          className="nsp-form-container mt-10 pt-10 "
        >
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
                      value={plan?.title}
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
                      value={plan?.description}
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
                      value={plan?.cost}
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
                      type="number"
                      value={plan?.cycle}
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
                      value={plan?.code}
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
              onClick={() => {
                navigate("/dashboard/service-plans");
              }}
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
      )}
    </>
  );
}
