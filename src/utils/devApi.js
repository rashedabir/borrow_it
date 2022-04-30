import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://borrow-it-v1.herokuapp.com",
  headers: { Authorization: localStorage.getItem("token") },
});

export default axiosInstance;
