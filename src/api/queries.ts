import axios from "./axios";
import { login, User } from "../store/user";

export const getMe = async () => {
  try {
    const { data } = await axios.get<User>("/user/me");
    login(data);
    return data;
  } catch (e) {
    return null;
  }
};
