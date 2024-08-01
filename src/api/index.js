import request from "@/utils/request";

/**
 * 三级联动接口
 **/
export const GetCategoryList = () => {
  return request({ url: "/product/getBaseCategoryList", method: "GET" });
};
