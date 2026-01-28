import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Proxied to backend
});

export default api;
