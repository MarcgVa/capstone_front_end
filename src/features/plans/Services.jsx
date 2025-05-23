import { useEffect, useState } from "react";
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
  const { status, isSuccess, data } = useGetServicePlansQuery();
  const { data: usersListOfSerivces } = useGetServicesforUserQuery(id);

  const [updateUserService] = useUpdateUserServicesMutation();
  const [addService] = useAddNewServiceMutation();

  const curPlanList = [];

  if (usersListOfSerivces?.length > 0) {
    for (let i = 0; i < usersListOfSerivces?.length; i++) {
      curPlanList.push(usersListOfSerivces[i]?.servicePlanId);
    }
  }

  const addNewService = async (payload) => {
    try {
      const response = addService(payload).unwrap();
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateService = async (payload) => {
    try {
      const response = updateUserService(payload).unwrap();
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addPlanToUser = async (selectedService) => {
    let isNew = false;
    console.log("selectedService", selectedService);
    let payload = {};
    let serviceToUpdate = {};
   

    // checking that user has existing services
    if (usersListOfSerivces.length > 0) {
      serviceToUpdate = usersListOfSerivces.find((obj) =>
        Object.values(obj).includes(selectedService.code)
      );
    } else { 
      console.log('usersListOfSerivces is empty')
    }
   
    console.log('serviceToUpdate length', serviceToUpdate.length);
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
    console.log('isNew', isNew);
    isNew ? addNewService(payload) : updateService(payload);
  };

  useEffect(() => {
    if (status === "fulfilled") {
      setServicePlans(data);
    }
  }, [status]);

  console.log("usersList", usersListOfSerivces);
  console.log("curPlanList", curPlanList);

  return (
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
