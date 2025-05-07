import { useEffect, useState } from 'react';
import { setSelectedUser } from '../../slices/userSlice';
import { useGetSelfQuery } from '../../slices/usersSlice';
import { useSelector } from 'react-redux';


export default function AccountCard() {
  const [user, setUser] = useState({});
  const selectedUser = useSelector((state) => state.user.value)
  const role = window.sessionStorage.getItem('role').toLowerCase();  
  const { isSuccess, data } = useGetSelfQuery();

  

  useEffect(() => { 
    if (role === 'manager') {
      setUser(selectedUser);
    } else if (isSuccess) { 
      setUser(data);
    }
  },[isSuccess])


  return (
    <div className="profile-content">
      {<h1>Profile-{role}</h1>}
      <div className="profile-card">
        <div className="profile-col-1">
          <div className="profile-row profile-row-left-1">
            <label className="profile-row-label">Name: </label>
            <p>
              <span className="profile-row-span">
                {user?.account?.firstName}
              </span>
              <span className="profile-row-span">
                {user?.account?.lastName}
              </span>
            </p>
          </div>
          <div className="profile-row profile-row-left-2">
            <label className="profile-row-label">Phone:</label>
            <span className="profile-row-span">{user?.account?.phone}</span>
          </div>
          <div className="profile-row profile-row-left-3">
            <label className="profile-row-label">Email:</label>
            <span className="profile-row-span">{user?.email}</span>
          </div>
        </div>
        <div className="profile-col-2">
          <div className="profile-row profile-row-right-1">
            <label className="profile-row-label">Address:</label>
       
              <span className="profile-row-span">{user?.account?.address}</span>
              <span className="profile-row-span">{user?.account?.city}</span> 
              <span className="profile-row-span">{user?.account?.state}</span> 
              <span className="profile-row-span">{user?.account?.zip}</span>
       
          </div>
          <div className="profile-row profile-row-2">
            <label className="profile-row-label">Next Cut Date:</label>
            <span className="profile-row-span">
              {new Date(user?.account?.cutDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
