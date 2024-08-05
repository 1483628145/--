// search仓库

// api请求接口
import { reqProductList } from "@/api/search";

const state = {
  produceList: {} || state.produceList,
};
const mutations = {
  // 保存ProduceList
  setProduceList(state, produceList) {
    state.produceList = produceList.data;
  },
};
const actions = {
  // 请求搜索商品结果
  async getProduceList({ commit }, searchParams) {
    const produceList = await reqProductList(searchParams);
    commit("setProduceList", produceList);
  },
};
// getter 计算属性 方便拿数据
const getters = {
  // 商品列表
  // 在这里起码要返回一个 空数组 
  goodsList: (state) => state.produceList.goodsList || [],
  // 商品属性
  attrsList: (state) => state.produceList.attrsList || [],
  // 品牌列表
  trademarkList: (state) => state.produceList.trademarkList || [],
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
