/*
  This is the list of services for the use to select.
  
  Selections made here are picked up on the ServiceList and added to the AccountDetailsCard
*/
import { useEffect, useState } from "react";
import {FadeLoader} from "react-spinners"
import {
  useGetServicePlansQuery,
  useGetServicesforUserQuery,
  useUpdateUserServicesMutation,
  useAddNewServiceMutation,
} from "../../slices/servicesSlice";
import "./plans.css";
import { useParams } from "react-router-dom";
import { notify } from "../../utils/lib";
import { ToastContainer } from "react-toastify";

export default function Services() {
  const { id } = useParams();
  const [servicePlans, setServicePlans] = useState();
  const { status, isSuccess, isLoading, data } = useGetServicePlansQuery();
  const {status: listStatus,  data: userListOfServices } = useGetServicesforUserQuery(id);
  const [updateUserService] = useUpdateUserServicesMutation();
 

  const curPlanList = [];
  
  useEffect(() => {
    if (status === "fulfilled") {
      setServicePlans(data);
    }
  }, [status]);

  
  if (userListOfServices?.length > 0) {
    for (let i = 0; i < userListOfServices?.length; i++) {
      curPlanList.push(userListOfServices[i]?.servicePlanId);
    }
  }
  

  const addPlanToUser = async (selectedService) => {
    
    const payload = {
      accountId: id,
      servicePlanId: selectedService.servicePlanId,
      code: selectedService.code,
    };

    try {
      const response = updateUserService(payload).unwrap();

      if (response) {
        notify('success', 'Successfully completed service request', 2500);
      }
    } catch (error) {
      notify('error', 'Unfortunately, we were unable to complete the request.', 2500);
      console.error(error);
    }
  };

    if (isLoading) {
      return (
        <div className="spinner-container flex-col h-[100svh] w-full">
          <FadeLoader color="#ffa500" />
        </div>
      );
    }
  return (
    <>
      <ToastContainer newestOnTop={true} />
      <div className="container ">
        <table className="service-table">
          <thead className="service-thead">
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Price</th>
              <th className="block"></th>
              <th className="block"></th>
            </tr>
          </thead>
          <tbody className="service-tbody">
            {isSuccess &&
              servicePlans?.map((plan) => {
                return (
                  <tr>
                    <td className="tbl-cell-service">
                      <p className="plan-title">{plan?.title}</p>
                    </td>
                    <td className="tbl-cell-service">
                      <p className="plan-description">{plan?.description}</p>
                    </td>
                    <td className="tbl-cell-service">
                      <p>
                        <span className="tbl-cost">$</span>
                        <span className="tbl-cost">{plan?.cost}</span>
                        {plan?.cycle === 1
                          ? "/hour"
                          : plan?.cycle === 2
                          ? "/request"
                          : plan?.cycle === 0
                          ? "Info"
                          : "/month"}
                      </p>
                    </td>
                    <td className="tbl-cell-service "></td>
                    <td className="tbl-cell-service">
                      <div className="">
                        <button
                          disabled={
                            curPlanList?.includes(plan?.servicePlanId)
                              ? true
                              : false
                          }
                          className={
                            curPlanList?.includes(plan?.servicePlanId)
                              ? "btn-disabled btn-select"
                              : "btn-select"
                          }
                          onClick={() => addPlanToUser(plan)}
                        >
                          Select
                        </button>
                      </div>
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
