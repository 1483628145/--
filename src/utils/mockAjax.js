import axios from "axios";
// 进度条
import nProgress from "nprogress";
import "nprogress/nprogress.css";

// 创建对象
const mockRequest = axios.create({
  // 基础路径
  baseURL: "/mock",
  timeout: 5000,
});

// 请求拦截器
mockRequest.interceptors.request.use((config) => {
  // 进度条开始
  nProgress.start();
  return config;
});

// 响应拦截器
mockRequest.interceptors.response.use(
  // 响应成功
  (response) => {
    // 进度条结束
    nProgress.done();
    return response.data;
  },
  // 响应失败
  (error) => {
    return Promise.reject(new Error("fail"));
  }
);

export default mockRequest;
