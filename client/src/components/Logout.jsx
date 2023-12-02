import { RiLogoutCircleRLine } from "react-icons/ri";
import useLogout from "../hooks/useLogout";

const Logout = () => {
  const signout = useLogout();
  return (
    <button onClick={signout}>
      <RiLogoutCircleRLine style={{ width: "22px", height: "22px" }} />
    </button>
  );
};

export default Logout;
