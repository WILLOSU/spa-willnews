import axios from "axios";

const DATABASE_URL = "http://localhost:3001";

export function getAllPosts() {
  const response = axios.get(`${DATABASE_URL}/posts`); 
  return response;
}

export function getTopPost() {
  const response = axios.get(`${DATABASE_URL}/posts/top`); 
  return response;
}

export function searchPosts(title) {
  const response = axios.get(`${DATABASE_URL}/posts/search?title=${title}`);
  return response;
}
