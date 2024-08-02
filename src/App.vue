<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  date() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    // 获取三级联动数据
    async getCategoryList() {
      // 获取三级联动的数据
      await this.$store.dispatch("home/getCategoryList");
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style></style>
