import React, { useEffect, useState } from 'react'
import { useGetSelfQuery } from '../../slices/usersSlice';
import { useSelector } from 'react-redux';

export default function UserCard() {
  const [user, setUser] = useState({});
  const role = window.sessionStorage.getItem('role');
  const {status, isSuccess, data } = useGetSelfQuery();
 


  useEffect(() => {
    if (status.toLowerCase() === 'fulfilled') { 
      setUser(data);
    }
  }, [status])
  

  return (
    <div className="user-card">
      {isSuccess && <h1>UserCard({user?.email})</h1>}
    </div>
  );
}
