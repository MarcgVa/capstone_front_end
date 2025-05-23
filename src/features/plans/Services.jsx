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

export default function Services() {
  const { id } = useParams();
  const [servicePlans, setServicePlans] = useState();
  const { status, isSuccess, isLoading,  data } = useGetServicePlansQuery();
  const { data: userListOfServices } = useGetServicesforUserQuery(id);

  const [updateUserService] = useUpdateUserServicesMutation();
  const [addService] = useAddNewServiceMutation();

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

  const addNewService = async (payload) => {
    try {
      const response = addService(payload).unwrap();
      if (response) {
        console.log('add New Response',response);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const updateService = async (payload) => {
    try {
      const response = updateUserService(payload).unwrap();
      if (response) {
        console.log('update Response', response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addPlanToUser = async (selectedService) => {
    let isNew = false;
    console.log("selectedService", selectedService);
    const code = selectedService.code;
    
    let payload = {};
    let serviceToUpdate = {};

    // checking that user has existing services
    if (userListOfServices.length > 0) {
      console.log('in if userListOfServices', userListOfServices);
      serviceToUpdate = userListOfServices.find((obj) =>
        Object.values(obj).includes(code)
      );
      console.log('after find', serviceToUpdate);
    } 

    /* if user has existing services and one matched then update else create new entry.  This is for the 3 options of 'Cut Lawn' */
    if (serviceToUpdate.length === undefined) {
      isNew = true;
      payload = {
        accountId: id,
        servicePlanId: selectedService.servicePlanId,
        code: selectedService.code,
      };
    } else {
      payload = {
        id: serviceToUpdate.id,
        servicePlanId: selectedService.servicePlanId,
      };
    }

    isNew ? addNewService(payload) : updateService(payload);
  };


  console.log("usersList", userListOfServices);
  console.log("curPlanList", curPlanList);

  return (
    <div className="container ">
      {isLoading ? <FadeLoader /> : null }
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
                        {plan?.cycle === 1 ? "/hour" : plan?.cycle === 2? "/request" : plan?.cycle === 0? "Info" : "/month"}
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
  );
}
