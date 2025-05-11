import React, { useEffect, useState } from 'react'
import { useGetServicePlansQuery } from '../../slices/servicesSlice';

export default function ServicePlanDetails() {
  const [servicePlans, setServicePlans] = useState();
  const { status, data } = useGetServicePlansQuery();


  console.log('servicePlans',servicePlans);

  useEffect(() => {
    
    if (status === 'fulfilled') { 
      setServicePlans(data);
      console.log(data);
    }

  },[status])





  return (

    <div>ServicePlanDetails</div>
  )
}
