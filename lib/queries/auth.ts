import axios from "axios";
import User from "@/interfaces/User.interface";

const login = async (user: User) => {
  const { data } = await axios.post("/api/login", user);
  return data;
};

const signUp = async (user: User) => {
  const { data } = await axios.post("/api/v1/auth/sign-up", user);
  return data;
};

export { login, signUp };
