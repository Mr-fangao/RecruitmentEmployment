<template>
  <div class="login">
    <div class="header">
      <img src="../../assets/login/logo.png" />
      <h1>行业招聘大数据分析与就业服务系统</h1>
    </div>
    <div class="main">
      <div class="login_style">
        <h2>用户平台登录</h2>
        <el-form
          ref="loginFrom"
          :model="loginFrom"
          class="login-from"
          auto-complete="on"
        >
          <el-form-item>
            <img src="../../assets/login/user.png" />
            <el-input
              class="username"
              placeholder="请输入用户账号"
              v-model="loginFrom.userAccount"
              type="text"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <img src="../../assets/login/password.png" />
            <el-input
              placeholder="请输入用户密码"
              class="password"
              v-model="loginFrom.password"
              show-password
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox class="check">记住登录密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" round @click="handleLogin"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";

export default {
  data() {
    return {
      loginFrom: {
        userAccount: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      request.post("/api/user/login", this.form).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "登录成功",
          });
          this.$router.push("/test");
        } else {
          this.$message({
            type: "error",
            message: "用户或密码错误",
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped type="text/less">
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(../../assets/login/login_background.jpg);
  background-size: 100% 100%;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10%;
    width: 100%;
    img {
      height: 40px;
      margin-left: 20px;
    }
    h1 {
      font-size: 24px;
      color: #ffffff;
      font-family: Microsoft YaHei;
      font-weight: bold;
      margin-left: 20px;
    }
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    margin: 150px 0px;
    .login_style {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 40%;
      height: 60%;
      h2 {
        font-size: 20px;
        color: #ffffff;
        font-family: Microsoft YaHei;
        font-weight: bold;
        margin-bottom: 20px;
      }
      img {
        height: 20px;
        margin-top: 10px;
      }
      .username {
        border-bottom: 1px solid #b8b6b6;
        width: 300px;
      }
      .password {
        border-bottom: 1px solid #b8b6b6;
        width: 300px;
      }
      .check {
        color: #ffffff;
      }
    }
  }
}
</style>
