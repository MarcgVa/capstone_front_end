import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector } from "react-redux";
import AccountsCard from "./AccountsCard";
import "./accounts.css";

export default function AccountsList() {

  const { isSuccess } = useGetUsersQuery();
  const clients = useSelector((state) => state.users);
  console.log(clients);



  return (
    <>
      <div className="accounts-content">
        <div>
          <h1 className="page-title">Client List</h1>
        </div>
        {isSuccess &&
          clients.map((client) => {
            return <AccountsCard key={client?.id} client={client} />;
          })}
      </div>
    </>
  );
}

