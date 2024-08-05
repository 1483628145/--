<template>
  <div class="outer">
    <div class="floor">
      <!-- 一级分类 -->
      <div class="py-container">
        <div class="title clearfix">
          <h3 class="fl">{{ list.name }}</h3>
          <div class="fr">
            <ul class="nav-tabs clearfix">
              <!-- tabTab -->
              <li class="active" v-for="item in list.keywords" :key="item">
                <a href="#tab1" data-toggle="tab">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane">
            <div class="floor-1">
              <div class="blockgary">
                <ul class="jd-list">
                  <!-- keyWords -->
                  <li v-for="navlist in list.navList" :key="navlist.id">
                    {{ navlist.text }}
                  </li>
                </ul>
                <img :src="list.imgUrl" />
              </div>
              <!-- 轮播图 -->
              <div class="floorBanner">
                <!-- 公共组件 轮播图 将数据传递过去 -->
                <Carousel :list="list.carouselList"></Carousel>
              </div>

              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[0]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[1]" />
                </div>
              </div>
              <div class="split center">
                <img :src="list.bigImg" />
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[2]" />
                  <!-- <img src="./images/home/floor-1-5.png" /> -->
                </div>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[3]" />
                  <!-- <img src="./images/home/floor-1-6.png" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper from "swiper";
export default {
  name: "Floor",
  data() {
    return {};
  },
  props: ["list"],
  computed: {},
  watch: {
    // 监测list的变化 立即执行一次 不管有没有变化
    list: {
      // 立即执行一下 不论数据变化没有
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
          // Swiper需要将DOM节点作为对象传入
          new Swiper(this.$refs.floor1Swiper, {
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
  mounted() {
    // 创建swiper实例 由于数据是父组件传递过来的 所以直接在挂载的地方创建实例
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
  },
};
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
