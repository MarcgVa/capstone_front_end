import { useSelector } from 'react-redux';
import { selectUser } from '../../slices/userSlice';
import { useState } from 'react';

export default function User() {
  const user = useSelector(selectUser);
  const [userUpdate, setUserUpdate] = useState({ 
    email: '',
    role: '',
  });
  
  const [accountUpdate, setAccountUpdate] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cutDate: '',
  });

  const handleUserUpdate = (e) => {
    setUserUpdate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleAccountUpdate = (e) => {
    setAccountUpdate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="user">
      <form className="user-form">
        <label>Account Number:</label>
        <input type="text" value={user?.account?.accountId} readOnly={true} />
        <label>Role:</label>
        <input
          type="text"
          name="role"
          onChange={handleUserUpdate}
          value={user?.role}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleUserUpdate}
          value={user?.email}
        />

        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleAccountUpdate}
          value={user?.account?.firstName}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleAccountUpdate}
          value={user?.account?.lastName}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          onChange={handleAccountUpdate}
          value={user?.account?.phone}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          onChange={handleAccountUpdate}
          value={user?.account?.address}
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          onChange={handleAccountUpdate}
          value={user?.account?.city}
        />
        <label>State:</label>
        <input
          type="text"
          name="state"
          onChange={handleAccountUpdate}
          value={user?.account?.state}
        />
        <label>Zip Code:</label>
        <input
          type="text"
          name="zip"
          onChange={handleAccountUpdate}
          value={user?.account?.zip}
        />
        <label>Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={user?.account?.startDate}
          readOnly={true}
        />
        <label>Next Cut Date:</label>
        <input
          type="date"
          name="cutDate"
          onChange={handleAccountUpdate}
          value={user?.account?.cutDate}
        />
      </form>
    </div>
  );
}
