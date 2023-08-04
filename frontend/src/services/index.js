import axios from "axios";
import { register, signin, logout } from "./auth";
import { info } from "./user";
import { newspaperInfo } from "./searchs";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const searchs = {
  getNewspaper: newspaperInfo(client),
};

export { auth, user, searchs };
