import React from 'react';
import {setSelectedUser} from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import AccountCard from './AccountCard';
import ReactModal from 'react-modal';
import "./accounts.css";


export default function Account({ client }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoadUser = () => {
    console.log('inside', client);
    dispatch(setSelectedUser(client));
    navigate( '/dashboard/account');
   };

  const disableUser = (userId) => {
    console.log("disable: ", userId);
  };

  return (
    <>
      <div className="account-list">
        <div className="accounts-card">
          <h2>{`${client.account.firstName} ${client.account.lastName}`}</h2>
          <h2>{`${client.account.city}`}</h2>
          <h2>{`${new Date(client.account.cutDate).toLocaleDateString()}`}</h2>

          <div className="account-action-icons">
            <span
              className="material-symbols-outlined"
              onClick={handleLoadUser}
            >
              person_edit
            </span>
            <span
              className="material-symbols-outlined"
              onClick={() => {
                disableUser(client.id);
              }}
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

