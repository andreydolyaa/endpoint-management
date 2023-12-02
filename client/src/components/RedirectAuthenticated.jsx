import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";

const RedirectAuthenticated = () => {
  const { auth } = useAuth();

  return Object.keys(auth).length > 0 ? <Navigate to="/home/devices" /> : <Outlet />;
};

export default RedirectAuthenticated;
