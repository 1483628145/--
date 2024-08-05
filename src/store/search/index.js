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
    console.log(state.produceList.goodsList);
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
  goodsList: (state) => state.produceList.goodsList,
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
