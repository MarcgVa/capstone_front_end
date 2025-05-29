import { useEffect, useState } from "react";
import { useGetServicePlansQuery } from "../../slices/servicesSlice";
import Card from "../../components/Card";

import { FadeLoader, PacmanLoader } from "react-spinners";

export default function ServicePlanScreen() {
  const [plans, setPlans] = useState();

  const { status, isSuccess, isLoading, data } = useGetServicePlansQuery();


  useEffect(() => {
    if (status === "fulfilled") {
      setPlans(data);
    }
  }, [status]);

  if (isLoading) { 
    return (
      <div className="spinner-container service-plan-wrapper flex-col h-[100svh] w-full">
        <PacmanLoader color="#032403" />
      </div>
    );
  }
  return (
    <>
      
      <div className="service-plan-wrapper">
        <section className="service-plan-grid">
          {isSuccess &&
            plans?.map((plan) => {
              return <Card plan={plan} />;
            })}
        </section>
      </div>
    </>
  );
}
