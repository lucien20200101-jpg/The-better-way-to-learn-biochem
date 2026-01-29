import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 学习进度请求占位
export const fetchProgress = () => api.get("/progress");
