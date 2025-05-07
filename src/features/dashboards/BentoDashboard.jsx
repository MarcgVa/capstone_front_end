import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useGetTasksQuery } from "../../slices/tasksSlice";
import getRole from "../../utils/common";
import "./bento-dash.css";
import Weather from "../../components/Weather";


export default function BentoDashboard() {
  const role = getRole();
  /* Gathering Dashboard Data
     data loads to state */
  
  useGetTasksQuery();
  const tasks = useSelector((state) => state.tasks);
  const newConsultCount = Object.values(tasks).filter((task) => task.title === "NEW CONSULT REQUEST").length;
  
  useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const userCount = users.length;


  return (
    <div className="bento-page">
      <h2 className="bento-title">
        Everything at a <span>Glance</span>
      </h2>
      <div className="bento-content">
        <div className="bento-box">
          <h2>Today's Schedule</h2>
        </div>
        
        <div className="bento-box">
          <h2>New Consultation Requests</h2>
          <p>{ newConsultCount}</p>
        </div>
        
        <div className="bento-box">
          <h2>Total Clients</h2>
          <p>{ userCount }</p>
        </div>
        
        <div className="bento-box">
          <h2>Weather</h2>
          <Weather city={'Fredericksburg'} state={'Virginia' } />
        </div>
        
        <div className="bento-box">
          <h2>Maintence List</h2>
        </div>
      </div>
    </div>
  );
}
