import { useEffect, useState } from 'react';
import { useGetServicePlansQuery, useGetServicesforUserQuery } from '../../slices/servicesSlice'
import './plans.css'


export default function Services() {
  const [servicePlans, setServicePlans] = useState();
  const [disableButton, setDisableButton] = useState(false)
  const { status, isSuccess, data } = useGetServicePlansQuery();
  const { data: usersListOfSerivces } = useGetServicesforUserQuery();


 const role = window.sessionStorage.getItem("role");

  const addPlanToUser = (e) => { 
    console.log('e', e);
  }
  
  useEffect(() => {
    if (status === 'fulfilled') {
      setServicePlans(data);
    }
  }, [status])
  


  console.log('servicePlans', servicePlans);
  console.log('usersListOfServices', usersListOfSerivces);

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
                        <span className='plan-title'>{plan?.title}</span> - <span className='plan-price'>${plan?.cost}</span>
                      </p>
                      <p>{plan?.description}</p>
                    </article>
                  </div>
                  <div className="btn-select">
                    <button disabled={disableButton} onClick={() => addPlanToUser(plan)}>Select</button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
