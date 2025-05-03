import React from 'react'

export default function Task({title, description, completed, }) {
  
  return (
    <div className="card">
      <div className="user-content">
        <h2>{`${firstName} ${lastName}`}</h2>
        <h2>{`${city}`}</h2>
        <h2>{`${cutDate}`}</h2>
        <h2>{`${firstName} ${lastName}`}</h2>

        <div className="account-action-icons">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              editUser(accountId);
            }}
          >
            edit
          </span>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              disableUser(accountId);
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
