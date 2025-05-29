import { useEffect, useState} from 'react'
import { useGetTaskByIdQuery } from '../../slices/tasksSlice';
import { useParams } from 'react-router-dom';
import { setDateLocale } from '../../utils/lib';
import { FadeLoader } from 'react-spinners';

export default function Task() {
  const { id } = useParams();
  const [task, setTask] = useState();
  const [dueDate, setDueDate] = useState();
  const {status, isSuccess, isLoading, data } = useGetTaskByIdQuery(id);
  




  useEffect(() => {
    if (status === 'fulfilled') {
      setTask(data[0]);
      setDueDate(data[0]?.dueDate);
    }
  }, [status]);
  
  useEffect(() => {
    if (status === 'fulfilled') {

      setTask(data[0]);
      setDueDate(data[0]?.dueDate);
    }
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="spinner-container flex-col h-[100svh] w-full">
        <FadeLoader color="#ffa500" />
      </div>
    );
  }

  return (
    <div className="task-card">
      <div className="task-message">
        <div className="btn-container">
          <button className="btn-new-message hidden">New Message</button>
        </div>
        <div className="task-title-bar">
          <div>
            Due Date:{" "}
            <span>
              {isSuccess && setDateLocale(dueDate)}
            </span>
          </div>

          <div>
            Priority: <span>{task.priority}</span>
          </div>
          <div>
            Category: <span>{task.category}</span>
          </div>
          <div>
            Assigned To: <span>{task.assignedTo}</span>
          </div>
        </div>
        <div className="task-message-container">
          <div>{task.description}</div>
        </div>
      </div>
    </div>
  );
}
