import request from "@/utils/request";

/**
 * 获取三级联动接口
 **/
export const getCategoryList = () => {
  return request({ url: "/product/getBaseCategoryList", method: "GET" });
};
