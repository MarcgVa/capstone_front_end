import { useEffect, useState } from "react"
import { useGetMyScheduleQuery } from "../../slices/scheduleSlice"
import "./tech.css";

export default function TechSchedule() {
  const [schedule, setSchedule] = useState();

  const { status, isSuccess, data } = useGetMyScheduleQuery();

  console.log(status);
  console.log(data);

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
              return (
                <li>
                  <div className="scheduled-item">
                    <div className="client-title">
                      <div>
                        <span>{client?.account?.firstName}</span>
                        <span>{client?.account?.lastName}</span>
                      </div>
                      <div>
                        <span>{client?.code}</span>
                      </div>
                    </div>
                    <div className="client-phone">
                      <label>Phone:</label>
                      <span>{client?.account?.phone}</span>
                    </div>
                    <div className="client-address">
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
                    </div>
                    <div className="client-directions"></div>
                      <span>map directions here</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
