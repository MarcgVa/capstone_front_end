import { Checkbox } from '@headlessui/react';
import React, { useState} from 'react'

export default function Task({ taskId, title, description, completed, assignedTo, dueDate }) {
  
  const [isCompleted, setIsCompleted] = useState(completed);

   const editTask = (taskId) => {
     console.log("editTask: ", taskId);
   };

   const deleteTask = (taskId) => {
     console.log("deleteTask: ", taskId);
   };
  
  const processCompleted = async () => {
    setIsCompleted(!completed);
    // TODO:: Complete the update call to complete the task.
    
  }

  return (
    <div className="task-card">
      <div className="task-content">
        <input
          type='checkbox'
          name='complete'
          checked={isCompleted}
          onChange={processCompleted}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>{assignedTo}</h4>
        <h5>{ dueDate}</h5>
       
        <div className="account-action-icons">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              editTask(taskId);
            }}
          >
            edit
          </span>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              deleteTask(taskId);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
