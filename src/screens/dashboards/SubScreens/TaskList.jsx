import { setSelectedTask } from "../../../slices/taskSlice";
import { useGetTasksQuery } from "../../../slices/tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import Task from "../../../components/dashboard/Task";

export default function TaskList() {
  const { isSuccess } = useGetTasksQuery();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  console.log("tasks", tasks);

  const loadUser = (task) => {
    console.log("before", task);
    dispatch(setSelectedTask(task));
  };

  return (
    <div className="tasks-content">
      <div>
        <h1>Tasks</h1>
      </div>
      {isSuccess &&
        tasks?.map((task) => {
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
