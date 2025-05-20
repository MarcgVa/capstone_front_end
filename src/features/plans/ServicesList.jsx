import React, { useEffect, useState } from 'react'
import { useGetServicesforUserQuery } from '../../slices/servicesSlice';
import "./plans.css"


/* This is called by AccountDetailsCard to populate the Services the client has chosen*/ 


export default function ServicesList() {
  const [servicePlans, setServicePlans] = useState();
  const { status, isSuccess, data } = useGetServicesforUserQuery();

  console.log('status', status);
  console.log('isSuccess', isSuccess);
  console.log('servicePlans', servicePlans);
  console.log('data', data);




  useEffect(() => {
    
    if (status === 'fulfilled') { 
      setServicePlans(data);
      console.log('data', data);
    }

  },[status])





  return (
    <>
      <div className='services-list-page'>
        <ul className='services-list-content'>
        { isSuccess &&
          servicePlans?.map((plan) => {
          return (
            <li className="services-list-item" key={plan?.servicePlan?.id}>
              <div className="item-title">{plan?.servicePlan?.title}</div>
              <div className="item-date">
                {new Date(plan?.scheduledDate).toLocaleDateString() ===
                "12/31/1969"
                  ? null
                  : new Date(plan?.scheduledDate).toLocaleDateString()}
              </div>
            </li>
          );
          })
        }
        </ul>
      </div>
    </>
  );
}
