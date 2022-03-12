<template>
  <div class="details">
    <div class="header">
      <div class="other">
        <div class="title">
          <span>精选图片</span>
        </div>
        <div class="content">
          <div class="png"></div>
          <div class="vocation">
            <el-row :gutter="20">
              <el-col :span="8"><span>职位名称</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="company"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>学历要求</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="education"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作经验</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="experience"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作地点</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="address"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>职位薪资</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="salary"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>发布时间</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="time"></div
              ></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="others">
        <div class="title">
          <span>精选图片</span>
        </div>
        <div class="content">
          <div class="png"></div>
          <div class="vocation">
            <el-row :gutter="20">
              <el-col :span="8"><span>公司类型</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="type"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>公司规模</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="size"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>行业领域</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="industry"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作地区</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="region"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>公司福利</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="treat"></div
              ></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="title">
        <span>精选图片</span>
      </div>
      <div class="in" porp="introduce"></div>
    </div>
    <div class="foot">
      <div class="title">
        <span>精选图片</span>
      </div>
      <div class="re" porp="requirement"></div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import Bus from "../assets/js/bus.js";
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getAllData();
  },
  methods: {
    getAllData() {
      Bus.$on("myevent", (val) => {
        console.log(val);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 40%;
    width: 100%;
    display: flex;
    margin: 2%;
    .other {
      height: 100%;
      flex: 1;
    }
    .others {
      height: 100%;
      flex: 1;
    }
  }
  .middle{
    height: 30%;
    width: 100%;
    display: flex;
    margin: 2%;
  }
  .foot{
    height: 30%;
    width: 100%;
    display: flex;
    margin: 2%;
  }
  .title{
    height: 20%;
    width: 100%;
    // background-image: url("../");
  }
}
</style>
