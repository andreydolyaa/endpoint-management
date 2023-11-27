import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();


  // useEffect(() => {
    
  //   const responseInterceptors = axiosPrivate.interceptors.response(response => response, async (error) => {
  //     const prevRequest = error?.config;
  //     if ((error?.response?.status === 403 || error?.response?.status === 401) && !prevRequest?.send) {
  //       prevRequest.send = true;
  //       await refresh();
  //       const newAccessToken = auth;
  //       console.log(newAccessToken);
  //     }
  //   })
  // }, [auth, refresh]);
  
};

export default useAxiosPrivate;
