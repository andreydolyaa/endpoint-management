import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return Object.keys(auth).length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Auth;
