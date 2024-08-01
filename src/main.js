import Vue from "vue";
import App from "./App.vue";

// 全局样式引入
import "./assets/reset/iconfont.css";
import "./assets/reset/reset.css";

// 全局组件引入
import TypeNav from "@/pages/Home/TypeNav";

// 全局组件注册
Vue.component("TypeNav", TypeNav);

// 引入路由
import router from "./router";

Vue.config.productionTip = false;

import { GetCategoryList } from "@/api/index";
const res = await GetCategoryList();
console.log(res);

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
}).$mount("#app");
