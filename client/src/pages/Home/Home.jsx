import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../../redux/devices/deviceActions";
import useAuth from "../../hooks/useAuth";

function Home() {
  const navigate = useNavigate();
  const logout = useLogout();
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.devices);
  const {auth} = useAuth()

  useEffect(() => {
    dispatch(getDevices());
  }, []);

  const goToSettings = () => navigate("/settings");
  const goToProducts = () => navigate("/products");
  const goToLogin = () => navigate("/login");

  return (
    <div>
      {JSON.stringify(devices)}
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToSettings}>Settings</button>
      <button onClick={goToProducts}>Products</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
