<template>
  <div class="login-main">
    <div class="login-header clearfix">
      <div class="header-right clearfix">
        <div class="home" @click="gotoHome">返回首页</div>
        <div class="register" @click="gotoLogin">登录</div>
      </div>
    </div>

    <div class="main-body">
      <div class="top">
        <img class="logo" src="../../assets/img/logo1.png" alt />
      </div>
      <div class="center">
        <div class="registerbox">
          <span class="title">注册本站会员只需10秒，发布管理信息更轻松</span>
          <!-- <span class="register-item" @click="gotoRegister">点此注册>></span> -->
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <div class="username clearfix">
            <div class="label">用户名:</div>
            <input type="text" />
          </div>
          <div class="password clearfix">
            <div class="label">密码:</div>
            <input type="password" />
          </div>
           <div class="username clearfix">
            <div class="label">确认密码:</div>
            <input type="password" />
          </div>
          <div class="username clearfix">
            <div class="label">Email:</div>
            <input type="text" />
          </div>
          <div class="rememberpass">
            <span class="text">忘记密码?</span>
          </div>
          <button>立即注册</button>
        </div>
        <div class="bottom-right">
          <div class="registers">已经注册，立即登录</div>
          <button @click="gotoLogin">立即登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    gotoHome(){
      this.$router.push({
        name:'home'
      })
    },
    gotoLogin(){
    this.$router.push({
        name:'login'
      })
    }
  },
  computed: {},
  created() {},
  components: {}
};
</script>

<style lang="scss" scoped>
.login-main {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  .main-body {
    padding: 0 18% 0 18%;
    box-sizing: border-box;
    width: 100%;
    .top {
      width: 100%;
      .logo {
        width: 400px;
        height: 110px;
        margin-top: 40px;
        box-sizing: border-box;
      }
    }
    .center {
      width: 100%;
      height: 40px;
      border: 1px solid #55555530;
      .registerbox {
        line-height: 34px;
        .title {
          font-size: 15px;
        }
        .register-item {
          font-size: 15px;
          color: red;
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #55555530;
      .bottom-left {
        width: 100%;
        padding: 0 12% 30px 12%;
        box-sizing: border-box;
        flex: 2;
        border-right: 1px dashed #55555530;
        .username {
          margin-top: 20px;
          box-sizing: border-box;
          width: 100%;
          .label {
            float: left;
            text-align: right;
            width: 15%;
          }
          input {
            width: 60%;
            margin-left: 27px;
            float: left;
          }
        }
        .password {
          margin-top: 20px;
          box-sizing: border-box;
          width: 100%;
          .label {
            text-align: right;
            width: 15%;
            float: left;
          }
          input {
            width: 60%;
            margin-left: 27px;
            float: left;
          }
        }
        .rememberpass {
          width: 100%;
          text-align: right;
          padding-right: 93px;
          box-sizing: border-box;
          margin-top: 20px;
          .text {
          }
        }
        .rememberpass:hover{
          cursor: pointer;
        }
        button{
          box-sizing: border-box;
          width: 100px;
          height: 35px;
        }
      }
      .bottom-right {
        width: 100%;
        flex: 1;
        .registers{
          text-align: left;
          width: 100%;
          margin: 35px;
          box-sizing: border-box;
        }
        button{
          text-align: left;
          width: 85px;
          height: 35px;
          text-align: center;
          margin-left: 35px;
          box-sizing: border-box;
          background: #2681c3;
          color: #ffffff;
          border: none;
          border-radius: 2px;
        }
      }
    }
  }
  .login-header {
    width: 100%;
    height: 40px;
    float: right;
    background: #2681c3;
    .header-right {
      width: 200px;
      float: right;
      .home {
        width: 75px;
        float: left;
        height: 100%;
        color: #ffffff;
        line-height: 33px;
      }
      .home:hover {
        cursor: pointer;
      }
      .register {
        line-height: 33px;
        color: #ffffff;
        width: 75px;
        float: left;
        height: 100%;
      }
      .register:hover {
        cursor: pointer;
      }
    }
  }
}
</style>