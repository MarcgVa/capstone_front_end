import { useNavigate } from "react-router-dom"

export default function HomeScreen() {
  const navigate = useNavigate();
  
  return (
    <div className="flex-col">
      HomeScreen
      <button
        className="m-20 px-3 rounded-2xl flex bg-blue-700 text-sky-300"
        onClick={() => navigate("/auth/login")}
      >
        Login
      </button>
      <button
        className="m-20 px-3 rounded-2xl flex bg-emerald-700 text-green-400"
        onClick={() => navigate("/auth/register")}
      >
        Register
      </button>
    </div>
  );
}
