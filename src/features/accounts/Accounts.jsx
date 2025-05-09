import { useGetUsersQuery } from "../../slices/usersSlice";
import { useSelector } from "react-redux";
import AccountsCard from "./AccountsCard";
import "./accounts.css";
import { useEffect, useState } from "react";

export default function AccountsList() {
  const[clientList,setClientList]=useState([])
  const {isSuccess, data: clients } = useGetUsersQuery();
  


  useEffect(() => { 
   
      setClientList(clients);
  }, [isSuccess])


  return (
    <>
      <div>
        <h1 className="page-title">Client List</h1>
      </div>
      <div className="accounts-content">
        {isSuccess &&
          clientList?.map((client) => {
              return (
                <AccountsCard
                  key={client?.id}
                  user={client}
                  role={client.role.toLowerCase()}
                />
              );
            })}
      </div>
    </>
  );
}

