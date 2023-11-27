import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const goBack = () => navigate("/home");
  return (
    <div>
      <div>Settings</div>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Settings;
