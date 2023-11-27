import axios from "axios";
import { BASE_URL } from "../baseUrl";

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //TODO: DELETE, the axios private will handle the refresh cookie
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
