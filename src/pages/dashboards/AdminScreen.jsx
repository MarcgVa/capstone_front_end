import User from "../../components/dashboard/User";
import UsersList from "../../components/dashboard/UsersList";
import TaskList from "../../components/dashboard/TaskList";

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
      <div className="tasks">
        <h2>Tasks</h2>
        <TaskList /></div>
      <div className="invoices bg-amber-900 border">Invoices</div>

      <div className="weather admin bg-sky-400 border">weather</div>
      <div className="service bg-teal-400 border">Service</div>
    </div>
  );
}
