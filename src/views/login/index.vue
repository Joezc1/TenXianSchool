<template>
  <div class="login-main">
    <el-dialog title="找回密码" class="diabox" :visible.sync="dialogVisible" width="30%">
      <div v-if="!isPass" class="bottom-left">
        <div class="username clearfix">
          <div class="label">用户名:</div>
          <input v-model="passForm.username" type="text" />
        </div>
        <div class="username clearfix">
          <div class="label">手机号码:</div>
          <input v-model="passForm.tel" type="text" />
        </div>
        <div class="password clearfix">
          <div class="label">邮箱号:</div>
          <input type="text" v-model="passForm.email" />
        </div>
        <button @click="confirmPass">找回</button>
      </div>

      <div v-else class="bottom-left">
        <h4>请输入新的密码</h4>

        <div class="username clearfix">
          <div class="label">密码:</div>
          <input v-model="successForm.password" type="password" />
        </div>
        <div class="username clearfix">
          <div class="label">确认密码:</div>
          <input v-model="successForm.repassword" type="password" />
        </div>
        <button @click="updatePass">确定</button>
      </div>
    </el-dialog>

    <div class="login-header clearfix">
      <div class="header-right clearfix">
        <div class="home" @click="gotoHome">返回首页</div>
        <div class="register" @click="gotoRegister">注册</div>
      </div>
    </div>

    <div class="main-body">
      <div class="top">
        <img class="logo" src="../../assets/img/logo1.png" alt />
      </div>
      <div class="center">
        <div class="registerbox">
          <span class="title">还没有本站账号?</span>
          <span class="register-item" @click="gotoRegister">点此注册>></span>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <div class="username clearfix">
            <div class="label">用户名:</div>
            <input v-model="userInfo.username" type="text" />
          </div>
          <div class="password clearfix">
            <div class="label">密码:</div>
            <input type="password" v-model="userInfo.password" />
          </div>
          <div class="rememberpass">
            <span @click="remeberPass" class="text">忘记密码?</span>
          </div>
          <button @click="submitLogin">登录</button>
        </div>
        <div class="bottom-right">
          <div class="registers">立即注册</div>
          <button @click="gotoRegister">立即注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validata } from "../../utils/validata";
import * as myAxios from "../../api/usermanage";
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      // 是否找回成功
      isPass: false,
      // 弹出框
      dialogVisible: false,
      userInfo: {
        username: "",
        password: ""
      },
      successForm: {
        password: "",
        repassword: ""
      },
      passForm: {
        username: "",
        tel: "",
        email: ""
      }
    };
  },
  methods: {
    async confirmPass() {
      let that = this;
      await myAxios.findpass(this.passForm).then(res => {
        if (res.success) {
          let user = res.userInfo
          that.successForm.level = user.level
          that.successForm.userid = user.userid
          that.successForm.email = user.tel
          that.successForm.tel = user.tel
          that.successForm.username = user.username

          that.isPass = true;
          that.$message.success(res.msg);
        } else {
          that.$message.error("找回失败，请填写正确的账号、手机号码以及邮箱");
          that.passForm = {
            username: "",
            tel: "",
            email: ""
          };
          that.dialogVisible = false;
        }
      });
    },
    async updatePass() {
      if(this.successForm.password!=this.successForm.repassword){
        this.$message.error("密码不一致")
        return false
      }
      let that = this;
      await myAxios.updateUser(that.successForm.userid,that.successForm).then(res => {
        if (res.success) {
          that.$message.success(res.msg);
          that.successForm = {
            password: "",
            repassword: ""
          };
        } else {
          that.successForm = {
            password: "",
            repassword: ""
          };
          that.dialogVisible = false;
          that.$message.error(res.msg);
        }
      });
    },
    validata,
    submitLogin() {
      let list = [
        {
          value: this.userInfo.username,
          type: "username"
        },
        {
          value: this.userInfo.password,
          type: "password"
        }
      ];
      let obj = this.validata(list);
      if (!obj.success) {
        this.$message.warning(obj.msg);
        return false;
      }
      let that = this;
      this.$store.dispatch("Login", this.userInfo).then(res => {
        console.log(this.$store);
        this.$router.push({
          name: "home"
        });
      });
    },
    remeberPass() {
      this.passForm = {
        username: "",
        tel: "",
        email: ""
      };
      this.dialogVisible = true;
    },
    gotoHome() {
      this.$router.push({
        name: "home"
      });
    },
    gotoRegister() {
      this.$router.push({
        name: "register"
      });
    }
  },
  computed: {},
  created() {},
  components: {}
};
</script>

<style lang="scss" scoped>
.diabox {
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
        width: 20%;
      }
      input {
        width: 55%;
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
        width: 20%;
        float: left;
      }
      input {
        width: 55%;
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
    .rememberpass:hover {
      cursor: pointer;
    }
    button {
      box-sizing: border-box;
      width: 80px;
      margin-top: 20px;
      box-sizing: border-box;
      height: 30px;
    }
  }
  .bottom-right {
    width: 100%;
    flex: 1;
    .registers {
      text-align: left;
      width: 100%;
      margin: 35px;
      box-sizing: border-box;
    }
    button {
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
        .register-item:hover {
          cursor: pointer;
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
        .rememberpass:hover {
          cursor: pointer;
        }
        button {
          box-sizing: border-box;
          width: 100px;
          height: 35px;
        }
      }
      .bottom-right {
        width: 100%;
        flex: 1;
        .registers {
          text-align: left;
          width: 100%;
          margin: 35px;
          box-sizing: border-box;
        }
        button {
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