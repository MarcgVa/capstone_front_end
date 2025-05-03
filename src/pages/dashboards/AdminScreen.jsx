import User from "../../components/dashboard/User";
import UsersList from "../../components/dashboard/UsersList";

export default function AdminScreen() {



  return (
    <div className="operations-grid bg-[#ffa500]">
      <div className="sidebar">
        <h2>Clients</h2>
        <UsersList />
      </div>
      <div className="user">
        <User />
      </div>
      <div className="tasks bg-blue-400 border ">tasks</div>
      <div className="invoices bg-amber-900 border">Invoices</div>

      <div className="weather admin bg-sky-400 border">weather</div>
      <div className="service bg-teal-400 border">Service</div>
    </div>
  );
}
