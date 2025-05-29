import { useEffect, useState} from 'react'
import { useGetTaskByIdQuery } from '../../slices/tasksSlice';
import { useParams } from 'react-router-dom';

export default function Task() {
  const { id } = useParams();
  const [task, setTask] = useState();
  const [isCompleted, setIsCompleted] = useState();
  const [dueDate, setDueDate] = useState();
  const {status, isSuccess, data } = useGetTaskByIdQuery(id);
  




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
              {isSuccess && new Date(dueDate).toLocaleDateString()}
            </span>
          </div>

          <div>
            Priority: <span>{isSuccess && task?.priority}</span>
          </div>
          <div>
            Category: <span>{isSuccess && task?.category}</span>
          </div>
          <div>
            Assigned To: <span>{isSuccess && task?.assignedTo}</span>
          </div>
        </div>
        <div className="task-message-container">
          <div>{isSuccess && task?.description}</div>
        </div>
      </div>
    </div>
  );
}
