import { useDisableUserMutation } from '../../slices/usersSlice';
import {setSelectedUser} from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { notify } from '../../utils/lib';

import "./accounts.css";


export default function Account({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disableUser] = useDisableUserMutation();

  const handleLoadUser = () => {
    dispatch(setSelectedUser(user));
    navigate( `/dashboard/account/${user.id}`);
   };

  const handleDisableUser = async () => {
    try {
      const response = await disableUser(user.id).unwrap();
      if (response) { 
        notify()
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="accounts-list">
        <div className="accounts-card">

          <div className='accounts-info'>
            <p className='accounts-name'>{`${user.account.firstName} ${user.account.lastName}`}</p>
            <p>{`${user.account.city}`}</p>
            <p>{`${new Date(user.account.cutDate).toLocaleDateString()}`}</p>
          </div>

          <div className="accounts-action-icons">
            <span
              className="material-symbols-outlined"
              onClick={handleLoadUser}
            >
              person_edit
            </span>
            <span
              className="material-symbols-outlined"
              onClick={handleDisableUser}
            >
              delete
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

