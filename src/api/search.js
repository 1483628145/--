import request from "@/utils/request";

/**
 * 根据请求的参数 拿到商品数据
 **/
export const reqProductList = (searchParams) =>
  request.post("/list", searchParams);
