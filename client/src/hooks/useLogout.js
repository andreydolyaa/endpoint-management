import useAuth from "./useAuth";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/user/userActions";
import api from "../api/axios";

function useLogout() {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    dispatch(signOut());
    try {
      await api.get("/auth/signout");
    } catch (error) {
      console.log("Failed to signout ", error); // TODO: handle error
    }
  };

  return logout;
}

export default useLogout;
