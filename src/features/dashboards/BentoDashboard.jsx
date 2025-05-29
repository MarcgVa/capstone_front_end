import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Weather from "../../components/Weather";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { useGetServiceWithNoCutDateQuery } from "../../slices/servicesSlice";
import { useGetNewConsultsQuery, useGetTasksQuery } from "../../slices/tasksSlice";
import { useGetTodayScheduleQuery, useGetMaintenanceScheduleQuery } from "../../slices/scheduleSlice";
import "./bento-dash.css";
import Services from "../plans/Services";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { setDateLocale } from "../../utils/lib";


export default function BentoDashboard() {
  const [newConsults, setNewConsults] = useState();
  const [scheduleList, setScheduleList] = useState([]);
  const [tasks, setTasks] = useState();
  const navigate = useNavigate();
  
  const {isSuccess: isScheduleSuccess,isLoading: isScheduleLoading, data: schedules } = useGetTodayScheduleQuery();

  
  const { status, data } = useGetTasksQuery();
  const { isSuccess, isLoading: isConsultLoading, data: consultants } = useGetNewConsultsQuery();

  useGetUsersQuery();
  const users = useSelector((state) => state.users);
  const userCount = users.length;

  const { isSuccess: isNoCutSuccess, isLoading: isNoCutLoading, refetch, data: usersWithoutCutDates } = useGetServiceWithNoCutDateQuery()

  const { isSuccess: isMaintenanceSuccess, isLoading: isMaintenanceLoading, data: maintenanceList } = useGetMaintenanceScheduleQuery();



  useEffect(() => { 
    
    if (Array.isArray(schedules)) {
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

  if (isScheduleLoading || isConsultLoading || isNoCutLoading || isMaintenanceLoading) { 
    return (
      <div className="spinner-container flex-col h-[100svh] w-full">
        <FadeLoader color="#ffa500" />
      </div>
    );
  }

  return (
    <div className="bento-page">
      <h2 className="bento-title">
        Everything at a <span>Glance</span>
      </h2>
      <div className="bento-content">
        <div className="bento-box">
          <h2>Today's Schedule</h2>
          <table>
            <thead>
              <tr>
                <th> Client </th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {isScheduleSuccess &&
                scheduleList.map((item) => {
                  return (
                    <tr>
                      <td className="tbl-name">{`${item?.firstName} ${item?.lastName}`}</td>
                      <td className="tbl-service">{item?.Services?.map((service) => {
                        return (
                          <p>{service?.code}</p>
                        )
                      })}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div
          className="bento-box cursor-pointer"
          onClick={() => { navigate('/dashboard/tasks') }}
        >
          <h2>New Consultation Requests</h2>
          <p>{isSuccess && newConsults.length}</p>
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
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Cycle</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {isMaintenanceSuccess &&
                maintenanceList?.map((item) => {
                  return (
                    <tr>
                      <td>{item.item}</td>
                      <td>{item.cycle}</td>
                      <td>{setDateLocale(item.startDate)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="bento-box">
          <h2>Schedule Cut Required</h2>
          <p>{isNoCutSuccess && usersWithoutCutDates.length}</p>
        </div>
      </div>
    </div>
  );
}
