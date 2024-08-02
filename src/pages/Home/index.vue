<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <BeLike></BeLike>
    <!-- 使用父子组件通信将数据分别传给floor -->
    <Floor v-for="item in floorList" :key="item.id"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import List from "@/pages/Home/List";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import BeLike from "@/pages/Home/BeLike";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
import floorList from "@/mock/floor";
export default {
  components: {
    List,
    TodayRecommend,
    Rank,
    BeLike,
    Floor,
    Brand,
  },
  methods: {
    // 发请求拿 floorList
    getFloorList() {
      this.$store.dispatch("home/getFloorList");
    },
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
  mounted() {
    this.getFloorList();
  },
};
</script>

<style></style>
