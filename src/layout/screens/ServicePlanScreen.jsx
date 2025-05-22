import { useEffect, useState } from "react";
import { useGetServicePlansQuery } from "../../slices/servicesSlice";
import Card from "../../components/Card";

export default function ServicePlanScreen() {
  const [plans, setPlans] = useState();

  const { status, isSuccess, data } = useGetServicePlansQuery();

  console.log('plans', plans)
  useEffect(() => {
    if (status === "fulfilled") {
      setPlans(data);
    }
  }, [status]);

  return (
    <>
     <div className="service-plan-wrapper">
      <section className="service-plan-grid">{
        isSuccess &&
        plans?.map((plan) => { 
          return(
            <Card plan={plan} />
          )
        })
      }</section>
      </div>
    </>
  );
}
