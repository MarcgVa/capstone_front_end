import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = () => {
  const token = window.sessionStorage.getItem('token');

  if (!token) {
    //If not authenticated, redirect to login page.
    return <Navigate to="/auth/login"/>
  }

  //If authenticated continue to child route
  return <Outlet/>
}
