import React, { useEffect } from 'react'
import { setSelectedUser } from '../../slices/userSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSelector } from 'react-redux';

export default function User() {
  const user = useSelector((state) => state.user.value);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(user);
  },[])
  return (
    <div>{ user.email }</div>

  )
}
