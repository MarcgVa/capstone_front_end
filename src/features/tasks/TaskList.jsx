import { useGetTasksQuery } from "../../slices/tasksSlice";
import { useSelector } from "react-redux";
import Task from "../../features/tasks/Task";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import "./tasks.css";


export default function TaskList() {
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
      <div>
        <h1>Tasks({role})</h1>
      </div>
      {isSuccess &&
        taskList.map((task) => {
          return (
            <Task
              key={task?.id}
              taskId={task?.id}
              title={task?.title}
              description={task?.description}
              completed={task?.completed}
              assignedTo={task?.assignedTo}
              dueDate={task?.dueDate}
            ></Task>
          );
        })}
    </div>
  );
}
