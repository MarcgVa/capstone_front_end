import { useEffect, useState } from "react"
import {useGetServicePlansQuery }from "../../slices/servicesSlice"
import "./plans.css"
import { useNavigate } from "react-router-dom";
export default function ServicePlanDetails() {
  const [plans, setPlans] = useState();
  const { status, isSuccess, data: planList } = useGetServicePlansQuery();
  const navigate = useNavigate();

  const editService = (plan) => {
    console.log('es-plan', plan);
  };

  const addNewService = () => {
    console.log("addNewService");
  };

  useEffect(() => { 
    if (isSuccess) { 
      setPlans(planList);
    }
  }, [status])

  console.log('plans', plans);

  return (
    <>
      <div className="btn-area">
        <button
          onClick={() => addNewService}
          className="btn-add relative top-2 right-4 cursor-pointer"
        >
          <span className="">New</span>
          <span className="material-symbols-outlined">
            add
          </span>
        </button>
      </div>
      <div className="relative top-10 left-10 flex flex-col w-[80vw] h-[70vh] overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <table className="table h-[70vh] w-full">
          <thead className="text-center">
            <tr className="text-yellow-500">
              <th>Title</th>
              <th>Description</th>
              <th>Code</th>
              <th>Cost</th>
              <th>Cycle</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              plans?.map((plan) => {
                return (
                  <tr className="text-gray-400 text-center p-5">
                    <td>{plan?.title}</td>
                    <td>{plan?.description}</td>
                    <td>{plan?.code}</td>
                    <td>${plan?.cost}</td>
                    <td>{plan?.cycle}</td>
                    <td>
                      <button
                        name={plan?.servicePlanId}
                        className="btn-edit"
                        onClick={() => editService(plan)}
                      >
                        <span class="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
