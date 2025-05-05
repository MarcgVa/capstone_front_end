import { useNavigate, Link } from "react-router-dom";
import { useGetUsersQuery } from "../../slices/usersSlice";
import { setSelectedUser } from "../../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";



export default function AccountsList() {

  const { isSuccess } = useGetUsersQuery();
  const clients = useSelector((state) => state.users);
  console.log(clients);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

// const handleLoadUser = (client) => {
//   console.log("inside", client);
//   dispatch(setSelectedUser(client));
  
// };

// const disableUser = (userId) => {
//   console.log("disable: ", userId);
// };
  
  


  return (
    <div className="clients-content">
      <div>
        <h1>Client List</h1>
      </div>
      <ul>
        {isSuccess &&
          clients.map((client) => {
            return <Account key={client?.id} client={client} />;
          })}
      </ul>
    </div>
  );
}

function Account({ client }) { 
  return (
    <li className="client">
      <div className="card">
        <div className="user-content">
          <h2>{`${client.account.firstName} ${client.account.lastName}`}</h2>
          <h2>{`${client.account.city}`}</h2>
          <h2>{`${new Date(client.account.cutDate).toLocaleDateString()}`}</h2>

          <div className="account-action-icons">
            <Link to="/dashboard/account">
              <span
                className="material-symbols-outlined">person_edit</span>
            </Link>
            <span
              className="material-symbols-outlined"
            >
              delete
            </span>
          </div>
        </div>
      </div>
    </li>
  );

}

