import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

function Home() {
  const navigate = useNavigate();
  const logout = useLogout();

  const goToSettings = () => navigate("/settings");
  const goToProducts = () => navigate("/products");
  return (
    <div>
      <button onClick={goToSettings}>Settings</button>
      <button onClick={goToProducts}>Products</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
