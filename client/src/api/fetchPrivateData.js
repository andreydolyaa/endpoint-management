import axios from "axios";
import { BASE_URL } from "../baseUrl";
import { axiosPrivate } from "./axios";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const attachToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

const refreshToken = async () => {
  const response = await api.get("/refresh");
  const token = response?.data?.accessToken;
  attachToken(token);
  return token;
};

const apiCallWithToken = async (
  url,
  method = "get",
  data = null,
  accessToken
) => {
  attachToken(accessToken);

  try {
    const response = await api({ method, url, data });
    return response;
  } catch (error) {
    if (error?.response && error?.response?.status === 401) {
      const newToken = await refreshToken();
      return apiCallWithToken(url, method, data, newToken);
    } else {
      throw error;
    }
  }
};

export default apiCallWithToken