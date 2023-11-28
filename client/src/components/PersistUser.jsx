import { useEffect, useState } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PersistUser() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const [loading, setLoading] = useState(true);

  const doRefresh = async () => {
    try {
      await refresh();
    } catch (error) {
      console.log("Error in PersistUser.jsx ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!auth?.user?.accessToken) {
      doRefresh();
    } else setLoading(false);
  }, []);

  return loading ? <div>Loading...</div> : <Outlet />;
}

export default PersistUser;
