import { useEffect, useState} from 'react'
import { useGetTaskByIdQuery } from '../../slices/tasksSlice';
import { useParams } from 'react-router-dom';

export default function Task() {
  const { id } = useParams()
  console.log('id', id);
  const [task, setTask] = useState();
  const [isCompleted, setIsCompleted] = useState();
  

  const {status, data } = useGetTaskByIdQuery(id);
  console.log('status', status);
  console.log('data', data);
  
   const editTask = (taskId) => {
     console.log("editTask: ", taskId);
   };

   const deleteTask = (taskId) => {
     console.log("deleteTask: ", taskId);
   };
  
  const processCompleted = async () => {
    setIsCompleted(!isCompleted);

    // TODO:: Complete the update call to complete the task.
    
  }





  useEffect(() => {
    if (status === 'fulfilled'){ 
    setTask(data);
    }
  },[status])




  return (
    <div className="task-card">
      <div className="task-message">
        <div className="btn-container">
          <button className="btn-new-message">New Message</button>
        </div>
        <div className="task-title-bar">
          <div>
            Due Date:{" "}
            <span>{isSuccess &&new Date(task[0]?.dueDate).toLocaleDateString()}</span>
          </div>

          <div>
            Priority: <span>{isSuccess && task[0]?.priority}</span>
          </div>
          <div>
            Category: <span>{task[0]?.category}</span>
          </div>
          <div>
            Assigned To: <span>{task[0]?.assignedTo}</span>
          </div>
        </div>
        <div className="task-message-container">
          <div>{task[0]?.description}</div>
        </div>
        <input
          type="checkbox"
          name="complete"
          checked={isCompleted}
          onChange={processCompleted}
        />
        <h2>{task?.title}</h2>
        <p>{task?.description}</p>
        <h4>{task?.assignedTo}</h4>
        <h5>{task?.dueDate}</h5>

        <div className="account-action-icons">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              editTask(task?.taskId);
            }}
          >
            edit
          </span>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              deleteTask(task?.taskId);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
