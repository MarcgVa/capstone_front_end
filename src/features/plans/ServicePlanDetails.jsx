import { useEffect, useState } from "react"
import {useGetServicePlansQuery }from "../../slices/servicesSlice"
import "./plans.css"
import { useNavigate } from "react-router-dom";
export default function ServicePlanDetails() {
  const [plans, setPlans] = useState();
  const { status, isSuccess, data: planList } = useGetServicePlansQuery();
  const navigate = useNavigate();


  useEffect(() => { 
    if (isSuccess) { 
      setPlans(planList);
    }
  }, [status])

  return (
    <div className="container">
      <div className="btn-area">
        <button
          onClick={() => navigate("/dashboard/service-plans/new")}
          className="btn-add relative top-2 right-4 cursor-pointer"
        >
          <span className="">New</span>
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      <div className="relative container">
        <table className="spd-table">
          <thead className="text-center">
            <tr className="spd-tbl-header">
              <th>Title</th>
              <th>Description</th>
              <th>Code</th>
              <th>Cost</th>
              <th>Cycle</th>
              <th className="block"></th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              plans?.map((plan) => {
                return (
                  <tr className="spd-tbl-row">
                    <td className="spd-plan-cell">{plan?.title}</td>
                    <td className="spd-plan-cell">{plan?.description}</td>
                    <td className="spd-plan-cell">{plan?.code}</td>
                    <td className="spd-plan-cell">${plan?.cost}</td>
                    <td className="spd-plan-cell">{plan?.cycle}</td>
                    <td>
                      <button
                        name={plan?.servicePlanId}
                        className="btn-edit"
                        onClick={() => navigate(`/dashboard/service-plans/plan/${plan.servicePlanId}`)}
                      >
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
