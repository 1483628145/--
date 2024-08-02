import request from "@/utils/request";
import mockRequest from "@/utils/mockAjax";

/**
 * 获取三级联动接口
 **/
export const getCategoryList = () => {
  return request({ url: "/product/getBaseCategoryList", method: "GET" });
};

/**
 * 获取banner数据(mock数据)
 * **/
export const getBannerList = () => mockRequest.get("/banner");
