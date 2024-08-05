import Vue from "vue";
import App from "./App.vue";

// 全局样式引入
import "./assets/reset/iconfont.css";
import "./assets/reset/reset.css";
import "swiper/css/swiper.css";

// 全局组件引入
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";

// 全局组件注册
Vue.component("TypeNav", TypeNav);
Vue.component("Carousel", Carousel);

// 引入路由
import router from "./router";

// 引入vuex
import store from "@/store";

// 引入mock
import "@/mock/mockServe";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");
