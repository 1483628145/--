// home模块

import { getCategoryList } from "@/api/home.js";
import { getBannerList } from "@/api/home.js";
import { getFloorList } from "@/api/home.js";

const state = {
  // 三级联动列表
  categoryList: [],
  bannerList: [],
  floorList: {},
};

const mutations = {
  // 保存categoryList
  createCategoryList(state, categoryList) {
    state.categoryList = categoryList.data;
  },
  // 保存bannerList
  setBannerList(state, bannerList) {
    state.bannerList = bannerList.data;
  },
  // 保存 setFloorList
  setFloorList(state, floorList) {
    state.floorList = floorList.data;
  },
};

const actions = {
  // 获取三级联动数据
  async getCategoryList(context) {
    const categoryList = await getCategoryList();
    context.commit("createCategoryList", categoryList);
  },

  // 获取轮播图
  async getBannerList(context) {
    let bannerList = await getBannerList();
    // console.log(res.data);
    context.commit("setBannerList", bannerList);
  },

  // 获取floor数据
  async getFloorList(context) {
    let floorList = await getFloorList();
    context.commit("setFloorList", floorList);
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
