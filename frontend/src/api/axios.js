import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Automatically attach token if stored
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // saved after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
