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
  const { isSuccess } = useGetTasksQuery();
  const [taskList, setTaskList] = useState([]);
  const tasks = useSelector((state) => state.tasks);
  const role = window.sessionStorage.getItem("role").toLowerCase();
  const email = window.sessionStorage.getItem("email");
  const userId = jwtDecode(window.sessionStorage.getItem("token")).id;

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
    navigate(`/dashboard/task/${id}`);
  };

  useEffect(() => {
    if (isSuccess) {
      setTaskList(tasks);
    }
    switch (role) {
      case "user":
        filterUserTasks(tasks, userId);
        break;
      case "tech":
        filterTechTasks(tasks, email);
        break;
      default:
        break;
    }
  }, [isSuccess]);

  return (
    <div className="tasks-content">
      <div className="task-left-col">
        <h2>Message Center</h2>
        <ul>
          {isSuccess &&
            taskList.map((task) => {
              return (
                <li key={task?.id} onClick={() => handleLoadDetails(task.id)}>
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
