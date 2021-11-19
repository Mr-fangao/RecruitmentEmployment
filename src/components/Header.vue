<template>
  <div>
    <div class="tab-content">
      <div
        class="tab-content1"
        @click="(cur = 1), gotojobsearch()"
        :class="{ active: cur == 1 }"
      >
        职位搜索
      </div>
      <div
        class="tab-content2"
        @click="(cur = 2), gotodata()"
        :class="{ active: cur == 2 }"
      >
        就业统计
      </div>
      <div
        class="tab-content3"
        @click="(cur = 3), gotoskillanalysis()"
        :class="{ active: cur == 3 }"
      >
        技能分析
      </div>
      <div class="tab-mid">网络招聘大数据分析与可视化系统</div>
      <div
        class="tab-content4"
        @click="(cur = 4), gotospatialquery()"
        :class="{ active: cur == 4 }"
      >
        空间查询
      </div>
      <div
        class="tab-content5"
        @click="(cur = 5), gotodatapanel()"
        :class="{ active: cur == 5 }"
      >
        数据面板
      </div>
      <div
        class="tab-content6"
        @click="(cur = 6), gotothematicmap()"
        :class="{ active: cur == 6 }"
      >
        <el-dropdown>
          <span class="el-dropdown-link">
            专题地图
            <!-- <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon> -->
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 1,
    };
  },
  methods: {
    gotojobsearch() {
      this.$router.replace("/jobsearch");
    },
    gotodata() {
      this.$router.replace("/data");
    },
    gotoskillanalysis() {
      this.$router.replace("/analysis");
    },
    gotospatialquery() {
      this.$router.replace("/query");
    },
    gotodatapanel() {
      this.$router.replace("/datapanel");
    },
    gotothematicmap() {
      this.$router.replace("/map");
    },
  },
};
</script>

<style lang="less" scoped>
.tab-content {
  background: url(../assets/img/headerbg.png);
  background-size: 100% 120%;
  text-align: center;
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: rgb(0, 195, 255);
  line-height: 50px;
  font-weight: bold;
  .tab-mid {
    cursor: pointer;
    flex: 6;
    line-height: 44px;
    font-family: 宋体;
    font-size: 18pt;
    font-weight: normal;
    color: rgb(245, 245, 245);
  }
  .tab-content1 {
    cursor: pointer;
    margin-left: 4%;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content2 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content3 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content4 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content5 {
    cursor: pointer;
    flex: 1;
    width: 50px;
    height: 40px;
  }
  .tab-content6 {
    cursor: pointer;
    margin-right: 4%;
    flex: 1;
    width: 50px;
    height: 40px;
    span {
      color: rgb(0, 195, 255);
      line-height: 50px;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
.tab-content .active {
  cursor: pointer;
  background: url(../assets/img/menucurrent.png);
  background-position: 49% -81%;
  color: #fff;
}
</style>
