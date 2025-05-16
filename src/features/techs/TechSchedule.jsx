import { useGetMyScheduleQuery } from "../../slices/scheduleSlice";

import { useEffect, useState } from "react";
import Map from '../../components/Map';
import "./tech.css";

const OFFICE_ADDRESS = '68 Walnut Farms Parkway, Fredericksburg, Virginia, 22405'
export default function TechSchedule() {
  const scheduledAddresses = [OFFICE_ADDRESS];
  const [schedule, setSchedule] = useState();
  const { status, isSuccess, data } = useGetMyScheduleQuery();


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
              let address = "";
              scheduledAddresses.push(
                address.concat(
                  client?.account?.address,
                  ", ",
                  client?.account?.city,
                  " ",
                  client?.account?.state,
                  ", ",
                  client?.account?.zip
                )
              );
              return (
                <li>
                  <div className="card-item">
                    <div className="card-left">
                      <div className="card-title">
                        <div>
                          <span>{client?.account?.firstName}</span>
                          <span>{client?.account?.lastName}</span>
                        </div>
                      </div>
                      <div className="card-phone">
                        <label>Phone:</label>
                        <span>{client?.account?.phone}</span>
                      </div>
                      <div className="card-address">
                        <label>Address:</label>
                        <div>
                          <article>
                            <p>{client?.account?.address}</p>
                            <p>
                              <span>{client?.account?.city},</span>
                              <span>{client?.account?.state},</span>
                              <span>{client?.account?.zip}</span>
                            </p>
                          </article>
                        </div>
                        <div className="card-service">
                          <label htmlFor="card-services">Services:</label>
                          <span>{client?.code}</span>

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
