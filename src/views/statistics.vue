<template>
  <div id="statistics">
    <div class="aside">
      <el-menu>
        <el-menu-item
          index="1"
          @click="show(1)"
          :class="index === 1 ? 'active' : ''"
          plain
        >
          <i class="fa fa-eercast fa-lg"></i>
          <span class="tab" slot="title">薪资</span>
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="show(2)"
          :class="index === 2 ? 'active' : ''"
          plain
        >
          <i class="fa fa-sort-amount-desc fa-lg"></i>
          <span class="tab" slot="title">学历</span>
        </el-menu-item>
        <el-menu-item
          index="3"
          @click="show(3)"
          :class="index === 3 ? 'active' : ''"
          plain
        >
          <i class="fa fa-thermometer-0 fa-lg"></i>
          <span class="tab" slot="title">经验</span>
        </el-menu-item>
        <el-menu-item
          index="4"
          @click="show(4)"
          :class="index === 4 ? 'active' : ''"
          plain
        >
          <i class="el-icon-menu"></i>
          <span class="tab" slot="title">职位</span>
        </el-menu-item>
        <!-- <el-menu-item
          index="5"
          @click="show(5)"
          :class="index === 5 ? 'active' : ''"
          plain
        >
          <i class="el-icon-menu"></i>
          <span class="tab" slot="title">时序</span>
        </el-menu-item> -->
      </el-menu>
    </div>
    <div class="content">
      <keep-alive>
        <component :is="comp" v-show="isShow"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import salary from "../components/statistics/salary.vue";
import education from "../components/statistics/education.vue";
export default {
  components: { salary,education },
  name: "statistics",
  data() {
    return {
      index: 1,
      comp: "salary",
      isShow: true,
    };
  },
  methods: {
    show(value) {
      if (value === 1) this.comp = "salary";
      else if (value === 2) this.comp = "education";
      else if (value === 3) this.comp = "heatmap";
      else if (value === 4) this.comp = "multimap";
    },
  },
};
</script>

<style lang="less">
#statistics {
  position: fixed;
  width: 100%;
  height: 100%;
}
.tab {
  height: 38%;
  line-height: 40px;
}
.aside {
  height: 100%;
  z-index: 999999;
  position: absolute;
  width: 3%;
  top: 0;
  left: 0;
  background-color: #0d1f30;
  .el-menu {
    top: 25%;
    width: 100%;
    height: 8%;
    right: 0%;
    background: transparent;
    border: none;
  }
  .el-menu-item.is-active {
    color: #15abc5;
    border-left: 5px solid #0cf3f3;
    background: transparent;
  }
  .el-menu-item {
    color: #fff;
  }
  .el-menu-item:hover {
    background: transparent;
  }
  .span {
    color: aliceblue;
  }
  ul {
    height: 100%;
    list-style-type: none; /*消除黑点*/
    text-align: center;
    li {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        color: aqua;
        font-size: 12px;
        font-family: Microsoft YaHei;
        // font-weight: bold;
        text-decoration: none; /*消除下划线*/
        border-radius: 5px;
        padding-bottom: 20px;
      }
    }
  }
}
.content {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
</style>
