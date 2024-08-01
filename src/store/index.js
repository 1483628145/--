// 引入vue和vuex
import Vue from "vue";
import VueX from "vuex";

// 注册vuex
Vue.use(VueX);

// 模块引入
import home from "@/store/home/index.js";
import search from "@/store/search";

// 对外暴露
export default new VueX.Store({
  modules: {
    home,
    search,
  },
});
