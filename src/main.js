import Vue from "vue";
import App from "./App.vue";

// 全局样式引入
import "./assets/reset/iconfont.css";
import "./assets/reset/reset.css";

// 引入路由
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
}).$mount("#app");
