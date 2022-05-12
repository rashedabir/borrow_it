import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://borrow-it-v1.herokuapp.com",
  baseURL: "http://localhost:4000",
  headers: { Authorization: localStorage.getItem("token") },
  withCredentials: true,
});

export default axiosInstance;
