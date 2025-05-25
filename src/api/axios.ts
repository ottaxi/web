import axios from "axios";
import { removeUser } from "../store/user";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response.use((res) => {
  if (res.status === 401) {
    removeUser();
  }
  return res;
});

export default axios;
