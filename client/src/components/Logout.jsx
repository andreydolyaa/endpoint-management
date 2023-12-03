import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const signout = useLogout();
  return (
    <button onClick={signout}>
      <RiLogoutCircleRLine style={{ width: "18px", height: "18px" }} />
    </button>
  );
};

export default Logout;
