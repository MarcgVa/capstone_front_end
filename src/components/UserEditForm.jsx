import { useEffect, useState } from "react";
import { useGetUserQuery } from "../slices/usersSlice";
import { useParams } from "react-router-dom";
import "./forms.css";

const dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}

export default function UserEditForm() {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    email: "",
    role: "",
  });

  const [account, setAccount] =useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
  });


  const { status, data } = useGetUserQuery(id);

  const handleUserUpdate = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserAccountUpdate = (e) => {
    setUser((prev) => ({
      ...prev.account,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAccountUpdate = (e) => {
    setAccount((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => { 
    let object = {};
    object = user;
    object[account] = account;
    // console.log('object', object);
  }

  useEffect(() => {
    if (status === 'fulfilled') { 
      setUser(data);
      setAccount(data.account);
    }
  },[status])
 
  return (
    <div className="user">
      <form className="user-form">
        <div className="user-form-content">
          <div>
            <label>Account Number:</label>
            <input type="text" value={user?.id} readOnly={true} />
          </div>
          <div>
            <label>Role:</label>
            <input
              type="text"
              name="role"
              onChange={handleUserUpdate}
              value={user?.role}
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={handleAccountUpdate}
              value={account?.firstName}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={handleAccountUpdate}
              value={account?.lastName}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleUserUpdate}
              value={user?.email}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              onChange={handleAccountUpdate}
              value={account?.phone}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              onChange={handleAccountUpdate}
              value={account?.address}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              onChange={handleAccountUpdate}
              value={account?.city}
            />
          </div>
          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              onChange={handleAccountUpdate}
              value={account?.state}
            />
          </div>
          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              name="zip"
              onChange={handleAccountUpdate}
              value={account?.zip}
            />
          </div>
          <div>
            <label>Next Cut Date:</label>
            <input
              type="date"
              name="cutDate"
              onChange={handleAccountUpdate}
              value={account?.cutDate}
            />
          </div>
        </div>
        <div className="btn-user-edit-submit">
          <button
            type="submit"
            onClick={handleSubmit}
            
          >Submit</button>
        </div>
      </form>
    </div>
  );
}
