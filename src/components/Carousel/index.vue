<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  data() {
    return {};
  },
  props: ["list"],
  watch: {
    // 检测bannerList变化
    list: {
      // 立即执行一次 解决在floor组件 监测不到list的变化
      immediate: true,
      handler(newvalue, oldvalue) {
        // 直接在后面创建是不行的 只能保证数据有 但是结构还是没有
        // new Swiper(".swiper-container", {
        //   loop: true,
        //   pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        //   },
        //   navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //   },
        //   scrollbar: {
        //     el: ".swiper-scrollbar",
        //   },
        // });
        this.$nextTick(() => {
          // 这个回调函数是在 DOM节点全部更新后才执行
          // 这个时候拿到的是 DOM 和 bannerList都完成了
          // watch + nextTick 完美解决这个需求
          // 很多插件都需要使用 在修改数据之后 然后再执行回调
          new Swiper(this.$refs.mySwiper, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        });
      },
    },
  },
};
</script>

<style></style>
