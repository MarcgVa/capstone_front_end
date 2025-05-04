import { useGetUsersQuery } from "../../../slices/usersSlice";
import { useSelector } from "react-redux";
import Account from "../../../components/dashboard/Account";

export default function AccountsList() {
  const { isSuccess } = useGetUsersQuery();
  const clients = useSelector((state) => state.users);

  console.log(clients);

  return (
    <div className="clients-content">
      <div>
        <h1>Client List</h1>
      </div>

      {isSuccess &&
        clients.map((client) => {
          return (
            <Account
              key={client?.id}
              onClick={() => {
                console.log("load:", client?.id);
              }}
              firstName={client?.account?.firstName}
              lastName={client?.account?.lastName}
              accountId={client?.account?.accountId}
              city={client?.account?.city}
              cutDate={client?.account?.cutDate}
            />
          );
        })}
    </div>
  );
}
