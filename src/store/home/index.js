// home模块

import { getCategoryList } from "@/api/home.js";
import { getBannerList } from "@/api/home.js";

const state = {
  // 三级联动列表
  categoryList: [],
  bannerList: [],
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
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
