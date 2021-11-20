<template>
  <div>
    <div class="tab-content">
      <div
        class="tab-content1"
        @click="(cur = 1), gotoskillanalysis()"
        :class="{ active: cur == 1 }"
      >
        技能分析
      </div>
      <div
        class="tab-content2"
        @click="(cur = 2), gotopostanalysis()"
        :class="{ active: cur == 2 }"
      >
        岗位分析
      </div>
      <div
        class="tab-content3"
        @click="(cur = 3), gotoregionalanalysis()"
        :class="{ active: cur == 3 }"
      >
        地区分析
      </div>
      <div class="tab-mid">网络招聘大数据分析与可视化系统</div>
      <div
        class="tab-content4"
        @click="(cur = 4), gotospatialquery()"
        :class="{ active: cur == 4 }"
      >
        空间查询
      </div>
      <div class="tab-content5">
        <el-dropdown>
          <span class="el-dropdown-link"> 数据面板 </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                @click="(cur = 5), gotojobdetails()"
                :class="{ active: cur == 5 }"
                >职位详情</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 6), gotosalarystatistics()"
                :class="{ active: cur == 6 }"
                >薪资统计</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 7), gotoeducationstatistics()"
                :class="{ active: cur == 7 }"
                >学历统计</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 8), gotoworkexperience()"
                :class="{ active: cur == 8 }"
                >工作经验</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="tab-content6">
        <el-dropdown>
          <span class="el-dropdown-link">
            专题地图
            <!-- <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon> -->
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                @click="(cur = 9), gotopointaggregation()"
                :class="{ active: cur == 9 }"
                >点聚合</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 10), gotosequential()"
                :class="{ active: cur == 10 }"
                >时序</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 11), gotogradedcolor()"
                :class="{ active: cur == 11 }"
                >分级色彩</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 12), gotopersonnelflow()"
                :class="{ active: cur == 12 }"
                >人员流向</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 13), gotothermodynamic()"
                :class="{ active: cur == 13 }"
                >热力图</el-dropdown-item
              >
              <el-dropdown-item
                @click="(cur = 14), gotofactorstatistics()"
                :class="{ active: cur == 14 }"
                >多要素统计</el-dropdown-item
              >
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
    gotoskillanalysis() {
      this.$router.replace("/skillanalysis");
    },
    gotopostanalysis() {
      this.$router.replace("/data");
    },
    gotoregionalanalysis() {
      this.$router.replace("/analysis");
    },
    gotospatialquery() {
      this.$router.replace("/query");
    },
    gotojobdetails() {
      this.$router.replace("/jobdetails");
    },
    gotosalarystatistics() {
      this.$router.replace("/salary");
    },
    gotoeducationstatistics() {
      this.$router.replace("/education");
    },
    gotoworkexperience() {
      this.$router.replace("/experience");
    },
    gotopointaggregation() {
      this.$router.replace("/aggregation");
    },
    gotosequential() {
      this.$router.replace("/sequential");
    },
    gotogradedcolor() {
      this.$router.replace("/graded");
    },
    gotopersonnelflow() {
      this.$router.replace("/flow");
    },
    gotothermodynamic() {
      this.$router.replace("/thermodynamic");
    },
    gotofactorstatistics() {
      this.$router.replace("/factor");
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
    span {
      color: rgb(0, 195, 255);
      line-height: 50px;
      font-weight: bold;
      font-size: 16px;
    }
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
