import {
  useDisableUserMutation,
  useGetUsersQuery,
} from "../../slices/usersSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/lib";
import "./accounts.css";
import { ToastContainer } from "react-toastify";

export default function AccountsList() {
  const [clientList, setClientList] = useState([]);
  const { isSuccess, data: clients } = useGetUsersQuery();
  const navigate = useNavigate();
  const [disableUser] = useDisableUserMutation();

  const handleEditUser = (user) => { navigate(`/dashboard/edit/user/${user?.id}`); };
  
  const handleLoadUserDashboard = (user) => {navigate(`/dashboard/account/${user.id}`); };

  const handleDisableUser = async (user) => {
    try {
      const response = await disableUser(user.id).unwrap();
      if (response) {
        notify('success', 'Successfully disabled account', 2500);
      }
    } catch (error) {
      notify('error', 'Unable to disable account', 2500);
      console.error(error);
    }
  };

  useEffect(() => {
    setClientList(clients);
  }, [isSuccess]);

  return (
    <>
      <ToastContainer newestOnTop={true} />
      <div>
        <h1 className="page-title">Client List</h1>
      </div>
      <div className="container accounts-content">
        <table className="accounts-list">
          <thead>
            <tr>
              <th className="account-title">First Name</th>
              <th className="account-title">Last Name</th>
              <th className="account-title">Email Address</th>
              <th className="account-title">Role</th>
              <th className="account-title">Street Address</th>
              <th className="account-title">City</th>
              <th className="account-title">State</th>
              <th className="account-title">Postal Code</th>
              <th className="account-title">Phone</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              clientList?.map((client) => {
                return (
                  <tr className="account-row" key={client?.id}>
                    <td className="account-cell">
                      {client?.account.firstName}
                    </td>
                    <td className="account-cell">{client?.account.lastName}</td>
                    <td className="account-cell">{client?.email}</td>
                    <td className="account-cell">{client?.role}</td>
                    <td className="account-cell">{client?.account.address}</td>
                    <td className="account-cell">{client?.account.city}</td>
                    <td className="account-cell">{client?.account.state}</td>
                    <td className="account-cell">{client?.account.zip}</td>
                    <td className="account-cell">{client?.account.phone}</td>
                    <td className="account-action-wrapper">
                      <div className="account-action-icons">
                        <p>
                          <span
                            className="material-symbols-outlined cursor-pointer"
                            onClick={() => {
                              handleEditUser(client);
                            }}
                          >
                            person_edit
                          </span>
                        </p>
                      </div>
                      <div className="account-action-icons">
                        <p>
                          <span
                            className="material-symbols-outlined cursor-pointer"
                            onClick={() => {
                              handleLoadUserDashboard(client);
                            }}
                          >
                            dashboard
                          </span>
                        </p>
                      </div>
                      <div className="account-action-icons">
                        <p>
                          <span
                            className="material-symbols-outlined cursor-pointer btn-warning"
                            onClick={() => {
                              handleDisableUser(client);
                            }}
                          >
                            delete
                          </span>
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
