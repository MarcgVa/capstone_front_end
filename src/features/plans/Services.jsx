import { useEffect, useState } from "react";
import {
  useGetServicePlansQuery,
  useGetServicesforUserQuery,
  useUpdateUserServicesMutation,
  useAddNewServiceMutation,
} from "../../slices/servicesSlice";
import "./plans.css";

export default function Services() {
  const [servicePlans, setServicePlans] = useState();
  const { status, isSuccess, data } = useGetServicePlansQuery();
  const { data: usersListOfSerivces } = useGetServicesforUserQuery();

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
    }

    /* if user has existing services and one matched then update else create new entry.  This is for the 3 options of 'Cut Lawn' */
    if (serviceToUpdate.length > 0) {
      payload = {
        id: serviceToUpdate.id,
        servicePlanId: selectedService.servicePlanId,
      };
    } else {
      isNew = true;
      payload = {
        servicePlanId: selectedService.servicePlanId,
        code: selectedService.code,
      };
    }

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
    <div className="sevice-select-container">
      <h1>Services</h1>
      <div className="service-select-list">
        <ul className="service-select-list">
          {isSuccess &&
            servicePlans?.map((plan) => {
              return (
                <li className="service-select-item" key={plan?.id}>
                  <div className="service-select-title">
                    <article>
                      <p>
                        <span className="plan-title">{plan?.title}</span> -{" "}
                        <span className="plan-price">${plan?.cost}</span>
                      </p>
                      <p>{plan?.description}</p>
                    </article>
                  </div>
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
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
