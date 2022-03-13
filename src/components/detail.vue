<template>
  <div class="details">
    <div class="he">
      <div class="other">
        <div class="title">
          <div class="imgBK"></div>
          <span>公司信息</span>
        </div>
        <div class="content">
          <div class="png"></div>
          <div class="vocation">
            <el-row :gutter="20">
              <el-col :span="8"><span>公司名称:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="company"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>公司类型:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="type"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>公司规模:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="size"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>行业领域:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="industry"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作地区:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="region"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>公司福利:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="treat"></div
              ></el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="others">
        <div class="title">
          <div class="imgBK"></div>
          <span>招聘要求</span>
        </div>
        <div class="content">
          <div class="png"></div>
          <div class="vocation">
            <el-row :gutter="20">
              <el-col :span="8"><span>职位名称:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="profession"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>学历要求:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="education"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作经验:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="experience"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>工作地点:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="address"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>职位薪资:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="salary"></div
              ></el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8"><span>发布时间:</span></el-col>
              <el-col :span="16"
                ><div class="details" prop="time"></div
              ></el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="title">
        <div class="imgBK"></div>
        <span>公司介绍</span>
      </div>
      <div class="in" porp="introduce"></div>
    </div>
    <div class="foot">
      <div class="title">
        <div class="imgBK"></div>
        <span>任职要求</span>
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
.details {
  // position: fixed;
  height: calc(100% - 45px);
  width: 100%;
  display: flex;
  flex-direction: column;
  .he {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1.5;
    padding: 0% 2% 2% 2%;
    .imgBK {
      width: 6.5%;
      height: 26.5%;
    }
    .other {
      height: 100%;
      flex: 1;
      // background: url("../assets/img/fq/bg-1.png") no-repeat;
      // background-size: 100% 100%;
      .png {
        background: url("../assets/img/fq/company.jpg") no-repeat;
        background-size: 100% 100%;
      }
    }
    .others {
      height: 100%;
      flex: 1;
      .png {
        background: url("../assets/img/fq/company1.jpeg") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .middle {
    // height: 30%;
    width: 100%;
    display: flex;
    flex: 1;
    padding: 0% 2% 2% 2%;
    .imgBK {
      width: 3.2%;
      height: 40%;
    }
  }
  .foot {
    // height: 30%;
    width: 100%;
    display: flex;
    flex: 1;
    padding: 0% 2% 2% 2%;
    .imgBK {
      width: 3.2%;
      height: 40%;
    }
  }
}

.title {
  height: 20%;
  width: 100%;
  text-align: left;
  font-size: 14pt;
  display: flex;
  align-items: center;
  .imgBK {
    background: url(../assets/img/pt/pt_title.png) no-repeat;
    background-size: 100% 100%;
  }
}
.content {
  height: 80%;
  width: 100%;
  display: flex;
  .png {
    width: 45%;
    height: 100%;
  }
  .vocation {
    width: 55%;
    height: 100%;
  }
}
.el-row {
  padding-bottom: 2.5%;
  .el-col {
    color: #fff;
  }
}

span {
  color: #fff;
}
</style>
