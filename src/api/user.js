import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 用户相关请求占位
export const fetchUserProfile = () => api.get("/user/profile");
