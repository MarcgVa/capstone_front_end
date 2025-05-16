import { useGetMyScheduleQuery } from "../../slices/scheduleSlice";

import { useEffect, useState } from "react";
import Map from '../../components/Map';
import "./tech.css";

const OFFICE_ADDRESS = '68 Walnut Farms Parkway, Fredericksburg, Virginia, 22405'
export default function TechSchedule() {
  const scheduledAddresses = [OFFICE_ADDRESS];
  const [schedule, setSchedule] = useState();
  const { status, isSuccess, data } = useGetMyScheduleQuery();

  console.log('data',data);

  useEffect(() => {
    if (status === 'fulfilled') { 
      setSchedule(data);
    }
  }, [status])
  
  return (
    <div className="schedule-container">
      <div>
        <h3>Today's Schedule</h3>
      </div>
      <div className="schedule-content">
        <ul className="schedule-list">
          {isSuccess &&
            schedule?.map((client) => {
              console.log('client', client);
              let address = "";
              scheduledAddresses.push(
                address.concat(
                  client?.address,
                  ", ",
                  client?.city,
                  " ",
                  client?.state,
                  ", ",
                  client?.zip
                )
              );
              return (
                <li>
                  <div className="card-item">
                    <div className="card-left">
                      <div className="card-title tracking-wider">
                        <div>
                          <span>{client?.firstName}</span>
                          <span>{client?.lastName}</span>
                        </div>
                      </div>
                      <div className="card-phone">
                        <label>Phone:</label>
                        <span>{client?.phone}</span>
                      </div>
                      <div className="card-address">
                        <label>Address:</label>
                        <div>
                          <article>
                            <p>{client?.address}</p>
                            <p>
                              <span>{client?.city},</span>
                              <span>{client?.state},</span>
                              <span>{client?.zip}</span>
                            </p>
                          </article>
                        </div>
                        <div className="card-service">
                          <label htmlFor="card-services">Services:</label>
                          {client?.Services?.map((service) => {
                            return <p>{service.code}</p>
                          })}

                        </div>
                      </div>
                    </div>
                    <div className="card-right">
                      <div className="card-directions">
                        <Map
                          origin={
                            scheduledAddresses[scheduledAddresses.length - 2]
                          }
                          destination={
                            scheduledAddresses[scheduledAddresses.length - 1]
                          }
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
