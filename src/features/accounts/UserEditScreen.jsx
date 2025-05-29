import { useEffect, useState } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../../slices/usersSlice";
import { useNavigate, useParams } from "react-router-dom";
import "../../components/forms.css";
import { notify } from "../../utils/lib";
import { ToastContainer } from "react-toastify";




export default function UserEditScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  const { status, data } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();
  
  const handleUpdate = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(user).unwrap();

      notify('success', "Successfully update user information!")
      navigate('/dashboard/accounts');
    } catch (error) {
      notify('error', "User information not updated.", 3000);
      console.error(error.message);
    }
  };
  
  useEffect(() => { 
    if(status === 'fulfilled'){
      const objUser = {
        id: data?.id,
        email: data?.email,
        role: data?.role,
        firstName: data?.account?.firstName,
        lastName: data?.account?.lastName,
        address: data?.account?.address,
        city: data?.account?.city,
        state: data?.account?.state,
        zip: data?.account?.zip
      };
    
      setUser(objUser);
    }
  },[status])

  return (
    <>
      <ToastContainer newestOnTop={true} />
      <div className="user">
        <form onSubmit={handleSubmit} className="user-form">
          <div className="user-form-content">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                onChange={handleUpdate}
                value={user?.firstName}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                onChange={handleUpdate}
                value={user?.lastName}
              />
            </div>
            <div>
              <label>Role:</label>
              <input
                type="text"
                name="role"
                onChange={handleUpdate}
                value={user?.role}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleUpdate}
                value={user?.email}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                onChange={handleUpdate}
                value={user?.phone}
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                onChange={handleUpdate}
                value={user?.address}
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                onChange={handleUpdate}
                value={user?.city}
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                name="state"
                onChange={handleUpdate}
                value={user?.state}
              />
            </div>
            <div>
              <label>Zip Code:</label>
              <input
                type="text"
                name="zip"
                onChange={handleUpdate}
                value={user?.zip}
              />
            </div>
            <div>
              <label>Next Cut Date:</label>
              <input
                type="date"
                name="cutDate"
                onChange={handleUpdate}
                value={user?.cutDate}
              />
            </div>
          </div>
          <div className="btn-user-edit-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
