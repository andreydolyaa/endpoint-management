import { useDispatch } from "react-redux";
import useAuth from "./useAuth";
import api from "../api/axios";
import { setNewUserAfterRefreshToken } from "../redux/user/userActions";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await api.get("/refresh", {
      withCredentials: true,
    });
    const user = response?.data;
    dispatch(setNewUserAfterRefreshToken(user));
    setAuth((prev) => {
      return { ...prev, user };
    });
    return user;
  };
  return refresh;
};

export default useRefreshToken;
