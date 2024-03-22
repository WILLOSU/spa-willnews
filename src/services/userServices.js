import axios from "axios";
import Cookies from "js-cookie";

const DATABASE_URL = "http://localhost:3000";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/XbRg9D7.png",
  };
  const response = axios.post(`${DATABASE_URL}/user/create`, body);
  return response;
}

export async function signin(data) {
  const response = await axios.post(`${DATABASE_URL}/auth/login`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${DATABASE_URL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}

function generateUserName(name) {
  const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}