import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../redux/user/userActions";
import useAuth from "./useAuth";
import api from "../api/axios";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const { setAuth } = useAuth();
  const user = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   setAuth(user);
  // }, [user]);

  const refresh = async () => {
    const response = await api.get("/refresh", {
      withCredentials: true,
    });
    console.log(response);
  };
  return refresh;
};

export default useRefreshToken;
