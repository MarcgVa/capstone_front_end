import UsersList from "../../components/dashboard/UsersList";

export default function AdminScreen() {



  return (
    <div className="operations-grid">
      <div className="accounts-grid">
        <div className="accounts">
          <h2 className="accounts-title">Clients</h2>
          <UsersList />
        </div>
        <div className="tasks bg-blue-400 border ">tasks</div>
        <div className="invoices bg-amber-400 border">Invoices</div>
        <div className="user bg-teal-400 border">Selected User</div>
        <div className="weather-grid bg-sky-400 border">weather</div>
      </div>
    </div>
  );
}
