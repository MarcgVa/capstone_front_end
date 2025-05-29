/* 

    This populates the services listed on the AccountDetailsCard page. 

*/ 
import React, { useEffect, useState } from 'react'
import { useGetServicesforUserQuery } from '../../slices/servicesSlice';
import { FadeLoader } from 'react-spinners';
import "./plans.css"
import { setDateLocale } from '../../utils/lib';




export default function ServicesList({id}) {
  const [servicePlans, setServicePlans] = useState();
  const { status, isLoading, isSuccess, data } = useGetServicesforUserQuery(id);


  useEffect(() => {
    if (status === 'fulfilled') { 
      setServicePlans(data);
    }
  },[status])



  if (isLoading) {
    return (
      <div className="spinner-container flex-col h-[100svh] w-full">
        <FadeLoader color="#ffa500" />
      </div>
    );
  }

  return (
    <>
      <div className='services-list-page'>
        <table className='w-full'>
          <tbody>
            {isSuccess &&
              servicePlans?.map((plan) => {
                return (
                  <tr key={plan.id} className='plans-row'>
                    <td className="plans-cell plan-service">{plan.servicePlan.title}</td>
                    <td className="plans-cell">
                      <p className="item-date">
                        {setDateLocale(plan.scheduledDate)}
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
