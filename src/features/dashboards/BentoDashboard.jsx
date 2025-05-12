import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useGetNewConsultsQuery, useGetTasksQuery } from "../../slices/tasksSlice";
import { useGetSchedulesQuery } from "../../slices/scheduleSlice";
import "./bento-dash.css";
import Weather from "../../components/Weather";
import { useEffect, useState } from "react";

export default function BentoDashboard() {
  const [newConsults, setNewConsults] = useState();
  const [scheduleList, setScheduleList] = useState([]);
  const [tasks, setTasks] = useState();

  useGetSchedulesQuery();
  const schedules = useSelector((state) => state.schedules);

  
  const { status, data } = useGetTasksQuery();
  const { isSuccess, data: consultants } = useGetNewConsultsQuery();

  useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const userCount = users.length;
  
  useEffect(() => { 
    
    if (Array.isArray(schedules)){
      setScheduleList(schedules);
    };

  },[schedules])

  useEffect(() => { 
    if (status === 'fulfilled') {
      setTasks(data);
    }
      
  },[status])

  useEffect(() => {
    if (isSuccess) { 
      setNewConsults(consultants);
    }
  },[isSuccess])

  return (
    <div className="bento-page">
      <h2 className="bento-title">
        Everything at a <span>Glance</span>
      </h2>
      <div className="bento-content">
        <div className="bento-box">
          <h2>Today's Schedule</h2>
          <ul>
            {
              scheduleList.map((item) => {
                return (
                  <li key={item.id} className="schedule-items">{`${item.account.firstName} ${item.account.lastName}`}</li>
                );
              })}
          </ul>
        </div>

        <div className="bento-box">
          <h2>New Consultation Requests</h2>
          <p>{isSuccess && newConsults?.length}</p>
        </div>

        <div className="bento-box">
          <h2>Total Clients</h2>
          <p>{userCount}</p>
        </div>

        <div className="bento-box">
          <h2>Weather</h2>
          <Weather city={"Fredericksburg"} state={"virginia"} />
        </div>

        <div className="bento-box">
          <h2>Maintence List</h2>
        </div>
        <div className="bento-box">
          <h2>Schedule Cut Required</h2>
        </div>
      </div>
    </div>
  );
}
