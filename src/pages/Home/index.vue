<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <BeLike></BeLike>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from "@/pages/Home/TypeNav";
import List from "@/pages/Home/List";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import BeLike from "@/pages/Home/BeLike";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  components: {
    TypeNav,
    List,
    TodayRecommend,
    Rank,
    BeLike,
    Floor,
    Brand,
  },
};
</script>

<style></style>
