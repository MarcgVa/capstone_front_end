import { setSelectedTask } from "../../../slices/taskSlice";
import { useGetTasksQuery } from "../../../slices/tasksSlice";
import { useSelector, useDispatch } from "react-redux";

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
    <div className="">
      <ul className="task-list">
        {isSuccess &&
          tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="task-item"
                onClick={() => {
                  loadUser(task);
                }}
              >
                {`${task.title} ${task.description}`}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
