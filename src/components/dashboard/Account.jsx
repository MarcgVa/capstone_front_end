import React from 'react'

export default function Account({ accountId, firstName, lastName, city, cutDate }) {
  const editUser = (userId) => {
    console.log("edit: ", userId);
  };

  const disableUser = (userId) => {
    console.log("disable: ", userId);
  };

  return (
    <div className="card">
      <div className="user-content">
        <h2>{`${firstName} ${lastName}`}</h2>
        <h2>{`${city}`}</h2>
        <h2>{`${new Date(cutDate).toLocaleDateString()}`}</h2>

        <div className="account-action-icons">
          <span
            className="material-symbols-outlined"
            onClick={() => {
              editUser(accountId);
            }}
          >
            person_edit
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
};

