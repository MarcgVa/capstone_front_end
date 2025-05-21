import {
  useDisableUserMutation,
  useGetUsersQuery,
} from "../../slices/usersSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/lib";
import "./accounts.css";

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
        notify();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setClientList(clients);
  }, [isSuccess]);

  return (
    <>
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
              <th className="block"></th>
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
                    <td className="account-cell account-action-icons">
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
                      <p>
                        <span
                          onMouseOver={"View Dashboard"}
                          class="material-symbols-outlined cursor-pointer"
                          onClick={() => {
                            handleLoadUserDashboard(client);
                          }}
                        >
                          dashboard
                        </span>
                      </p>
                      <p>
                        <span
                          className="material-symbols-outlined cursor-pointer"
                          onClick={() => {
                            handleDisableUser(client);
                          }}
                        >
                          delete
                        </span>
                      </p>
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
