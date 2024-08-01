// 引入Vue VueRouter
import Vue from "vue";
import VueRouter from "vue-router";

// 使用VueRouter
Vue.use(VueRouter);

// 重构 push | replace方法
// 保存 Vue Router 原始的 push 和 replace 方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// 重写 Vue Router 的 push 方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") {
      throw err;
    }
  });
};

// 重写 Vue Router 的 replace 方法
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject);
  }
  return originalReplace.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") {
      throw err;
    }
  });
};

// 引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

// 对外暴露router

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        showFooter: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        showFooter: false,
      },
    },
    {
      name: "search",
      path: "/search/:keyword?",
      component: Search,
      props: (route) => ({ keyword: route.params.keyword, id: route.query.id }),
      meta: {
        showFooter: true,
        showTypeNav: false,
      },
    },
    // 重定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
