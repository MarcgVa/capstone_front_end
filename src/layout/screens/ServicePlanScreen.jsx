import { useEffect, useState } from "react";
import { useGetServicePlansQuery } from "../../slices/servicesSlice";
import Card from "../../components/Card";

import { PacmanLoader } from "react-spinners";

export default function ServicePlanScreen() {
  const [plans, setPlans] = useState();

  const { status, isSuccess, isLoading, data } = useGetServicePlansQuery();


  useEffect(() => {
    if (status === "fulfilled") {
      setPlans(data);
    }
  }, [status]);

  return (
    <>
      <div className="absolute top-15 bg-zinc-800 w-full">{isLoading ? <PacmanLoader color="#ffa500" /> : null}</div>
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
