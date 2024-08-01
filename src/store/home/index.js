// home模块

import { getCategoryList } from "@/api/home.js";

const state = {
  // 三级联动列表
  categoryList: [],
};

const mutations = {
  // 保存categoryList
  createCategoryList(state, categoryList) {
    state.categoryList = categoryList.data;
  },
};

const actions = {
  // 获取三级联动数据
  async getCategoryList(context) {
    const categoryList = await getCategoryList();
    context.commit("createCategoryList", categoryList);
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
