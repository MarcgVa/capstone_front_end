import UsersList from "../../components/dashboard/UsersList";

export default function AdminScreen() {



  return (
    <div className="operations-grid">
      <div className="sidebar bg-amber-50">
        <h2>Clients</h2>
        <UsersList />
      </div>
      <div className="tasks bg-blue-400 border ">tasks</div>
      <div className="invoices bg-amber-900 border">Invoices</div>
      <div className="user bg-teal-400 border">Selected User</div>
      <div className="weather admin bg-sky-400 border">weather</div>
      <div className="service bg-teal-400 border">Service</div>
    </div>
  );
}
