import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 测验相关请求占位
export const fetchQuizList = () => api.get("/quiz/list");
