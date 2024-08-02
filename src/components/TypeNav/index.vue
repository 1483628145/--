<template>
  <div class="outer">
    <div class="type-nav">
      <div class="container" @mouseenter="showTab" @mouseleave="removeTab">
        <h2 class="all">全部商品分类</h2>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <!-- 一级标题 -->
              <div
                class="item"
                v-for="(item, index) in categoryList"
                :key="item.categoryId"
              >
                <h3
                  @mouseenter="indexEnter(index)"
                  @mouseleave="indexLeave"
                  :class="{ changeIndex: index === currenIndex }"
                >
                  <a
                    :data-categoryName="item.categoryName"
                    :data-category1Id="item.categoryId"
                    >{{ item.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="item2 in item.categoryChild"
                    :key="item2.categoryId"
                  >
                    <!-- 二级标题 -->
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="item2.categoryName"
                          :data-category2Id="item2.categoryId"
                          >{{ item2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 三级标题 -->
                        <em
                          v-for="item3 in item2.categoryChild"
                          :key="item3.categoryId"
                        >
                          <a
                            :data-categoryName="item3.categoryName"
                            :data-category3Id="item3.categoryId"
                            >{{ item3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入lodash --全部引入功能
import _ from "lodash";
export default {
  name: "TypeNav",
  data() {
    return {
      currenIndex: -1,
      show: true,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    // 获取三级联动的数据
    // this.getCategoryList();

    // 三级分类的显示和隐藏
    if (this.$route.meta.showTypeNav === false) {
      this.show = false;
    }
  },
  methods: {
    // // 获取三级联动数据
    // async getCategoryList() {
    //   // 获取三级联动的数据
    //   await this.$store.dispatch("home/getCategoryList");
    // },
    // 鼠标进入
    // indexEnter(index) {
    //   this.currenIndex = index;
    // },

    // 鼠标进入--节流优化
    indexEnter: _.throttle(function (index) {
      // 使用节流的方式去优化代码 这样不论用户在50mm内滑动多少都只有一次执行
      this.currenIndex = index;
    }, 50),

    // 鼠标移除
    indexLeave() {
      this.currenIndex = -1;
    },

    // 点击发生路由跳转
    goSearch(event) {
      // 采用 事件委派 + 编程式导航实现
      // 但是问题也出现 如何保证点击a标签
      // 如何拿到跳转的时候拿到当前的id和name
      // 并将信息通过路由传参的形式拿给search路由

      // 解决方案是使用 自定义属性来实现
      // 通过这个自定义属性 data-categoryName
      // 然后使用 event.target拿到当前事件的节点
      let node = event.target;

      // 通过这个形式就可以确定我们拿到的节点是不是a标签
      // 从而解决了第一个问题 --- 如何确定点击的是a标签
      // 使用 dataset可以拿到当前是节点的自定义属性
      // 如果我们拿到的自定义属性里面是 categoryname的时候
      // 也就保证了这是一个a标签
      // 从而再触发跳转等

      let { categoryname, category1id, category2id, category3id } =
        node.dataset;

      if (categoryname) {
        // 整理参数
        const location = { name: "search" };
        const query = { categoryName: categoryname };

        if (category1id) {
          // 一级分类
          query.category1Id = category1id;
        } else if (category2id) {
          // 二级分类
          query.category2Id = category2id;
        } else {
          // 三级分类
          query.category3Id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }

      // this.$router.push({
      //   name: "search",
      // });
    },

    // 鼠标进入和移除 隐藏三级联动
    showTab() {
      this.show = true;
    },
    removeTab() {
      if (this.$route.meta.showTypeNav === false) {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          // h3:hover {
          //   background-color: #ccc;
          // }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }

      .changeIndex {
        background-color: #ddd;
      }
    }

    // 为三级联动添加过渡动画
    // 进入
    .sort-enter {
      height: 0px;
    }

    .sort-enter-to {
      height: 461px;
    }

    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
