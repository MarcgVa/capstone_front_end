import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector } from "react-redux";
import AccountsCard from "./AccountsCard";
import "./accounts.css";
import { useEffect } from "react";

export default function AccountsList() {

  const { isSuccess } = useGetUsersQuery();
  const clients = useSelector((state) => state.users);


  useEffect(() => { 

  }, [])

  return (
    <>
      <div>
        <h1 className="page-title">Client List</h1>
      </div>
      <div className="accounts-content">
        {isSuccess &&
          clients.map((client) => {
            return <AccountsCard key={client?.id} user={client} />;
          })}
      </div>
    </>
  );
}

