import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToSettings = () => navigate("/settings");
  const goToProducts = () => navigate("/products");
  return (
    <div>
      <button onClick={goToSettings}>Settings</button>
      <button onClick={goToProducts}>Products</button>
    </div>
  );
}

export default Home;
