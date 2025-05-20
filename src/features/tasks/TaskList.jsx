import { useGetTasksQuery } from "../../slices/tasksSlice";
import { setSelectedTask } from "../../slices/taskSlice";
import { useSelector } from "react-redux";
import Task from "../../features/tasks/Task";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "./tasks.css";
import { Outlet, useNavigate } from "react-router-dom";

export default function TaskList() {
  const navigate = useNavigate();
  const { status, isSuccess, data: tasks } = useGetTasksQuery();
  const [taskList, setTaskList] = useState([]);
  const [newConsults, setNewConsults] = useState([]);
  const role = window.sessionStorage.getItem("role").toLowerCase();
  const email = window.sessionStorage.getItem("email");
  const userId = jwtDecode(window.sessionStorage.getItem("token")).id;

  const separateNewConsults = (items) => {
    const newList = Object.values(items).filter((item) => item.title === 'NEW CONSULT REQUEST');
    const results = Object.values(items).filter((item) => item.title !== 'NEW CONSULT REQUEST');
    
    setNewConsults(newList);
    setTaskList(results);
  }

  const filterUserTasks = (items, userId) => {
    const results = Object.values(items).filter(
      (item) => item.createdBy === userId
    );
    setTaskList(results);
  };

  const filterTechTasks = (items, email) => {
    const results = Object.values(items).filter(
      (item) => item.assignedTo === email
    );
    setTaskList(results);
  };

  const handleLoadDetails = (id) => {
    navigate(`/dashboard/tasks/task/${id}`);
  };

  useEffect(() => {
    if (status === "fulfilled") {
      setTaskList(tasks);
      switch (role) {
        case "user":
          filterUserTasks(tasks, userId);
          break;
        case "tech":
          filterTechTasks(tasks, email);
          break;
        default:
          separateNewConsults(tasks);
          break;
      }
    }
  }, [status]);

  return (
    <div className="tasks-content">
      <div className="task-left-col">
        <h2>Message Center</h2>
        <ul className="cursor-pointer task-left-consults">
          {newConsults.length > 0 &&
            newConsults.map((task) => {
              return (
                <li key={task?.id} onClick={() => handleLoadDetails(task.id)}
                className="task-left-item">
                  {task?.title}
                </li>
              );
            })}
        </ul>            
        <ul className="cursor-pointer task-left-main">
          {isSuccess &&
          taskList.map((task) => {
          return (
            <li key={task?.id} onClick={() => handleLoadDetails(task.id)}
            className="task-left-item">
              {task?.title}
            </li>
          );
        })}
        </ul>
      </div>
      <div className="task-right-col">
        <div className="task-message">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
