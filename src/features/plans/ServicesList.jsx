import React, { useEffect, useState } from 'react'
import { useGetServicesforUserQuery } from '../../slices/servicesSlice';
import "./plans.css"


/* This is called by AccountDetailsCard to populate the Services the client has chosen*/ 


export default function ServicesList({id}) {
  const [servicePlans, setServicePlans] = useState();
  const { status, isSuccess, data } = useGetServicesforUserQuery(id);


  useEffect(() => {
    if (status === 'fulfilled') { 
      setServicePlans(data);
    }
  },[status])





  return (
    <>
      <div className='services-list-page'>
        <table className='w-full'>
          <tbody>
            {isSuccess &&
              servicePlans?.map((plan) => {
                return (
                  <tr key={plan?.id} className='plans-row'>
                    <td className="plans-cell plan-service">{plan?.servicePlan?.title}</td>
                    <td className="plans-cell">
                      <p className="item-date">
                        {new Date(plan?.scheduledDate).toLocaleDateString() ===
                        "12/31/1969"
                          ? null
                          : new Date(plan?.scheduledDate).toLocaleDateString()}
                      </p>
                    </td>
                  </tr>
                );
              })


            }
          </tbody>
        </table>
      </div>
    </>
  );
}
