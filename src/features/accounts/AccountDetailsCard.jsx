import { useEffect, useState } from 'react';
import { useGetSelfQuery } from '../../slices/usersSlice';
import { useSelector } from 'react-redux';
import Weather from "../../components/Weather";

export default function AccountDetailsCard() {
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
  }, [isSuccess])
  
  useEffect(() => { 
    if (role === "manager") {
      setUser(selectedUser);
    }
  },[])


  return (
    <div className="account-details-page">
      <div className="account-details-content">
        <div className="account-details-box">
          {/* box -> one  */}
          <h3>Profile:</h3>
          <article className="account-details-article">
            <p>
              <label className="">First Name: </label>
              <span className="">{user?.account?.firstName}</span>
            </p>
            <p>
              <label className="">Last Name: </label>
              <span className="">{user?.account?.lastName}</span>
            </p>
            <p>
              <label className="">Phone:</label>
              <span className="">{user?.account?.phone}</span>
            </p>
            <p>
              <label className="">Email:</label>
              <span className="">{user?.email}</span>
            </p>
            <p>
              <label className="">Address:</label>
              <span className="">{user?.account?.address}</span>
            </p>
            <p>
              <label className="">City:</label>
              <span className="">{user?.account?.city}</span>
            </p>
            <p>
              <label className="">State:</label>
              <span className="">{user?.account?.state}</span>
            </p>
            <p>
              <label className="">Zip:</label>
              <span className="">{user?.account?.zip}</span>
            </p>
          </article>
        </div>

        <div className="account-details-box">
          {/* box-> two */}

          <div className='cut-date'>
            <h3>Next Cut Date:</h3>
            <p>
              {new Date(user?.account?.cutDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            {user && 
              <Weather
                city={`${user?.account?.city}`}
                state={`${user?.account?.state}`}
              />
            }
          </div>
        </div>
        <div className="account-details-box">
          {/* box->three */}
          <h3>Service Plan:</h3>
        </div>
        <div className="account-details-box">
          {/* box->four */}
          <h3>Invoices:</h3>
        </div>
      </div>
    </div>
  );
}
