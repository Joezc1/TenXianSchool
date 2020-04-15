<template>
  <div class="login-main">
    <div class="login-header clearfix">
      <div class="header-right clearfix">
        <div class="home" @click="gotoHome">返回首页</div>
      </div>
    </div>

    <div class="main-body">
      <div class="top">
        <img class="logo" src="../../assets/img/logo1.png" alt />
      </div>
      <!-- <div class="center">
        <div class="registerbox">
          <span class="title">注册本站会员只需10秒，查看信息更轻松</span>
        </div>
      </div>-->
      <div class="bottom">
        <div class="bottom-left">
          <div class="username clearfix">
            <div class="label">
              <span>*</span>用户名:
            </div>
            <input disabled v-model="userInfo.username" type="text" />
          </div>
          <div class="password clearfix">
            <div class="label">
              <span>*</span>密码:
            </div>
            <input v-model="userInfo.password" :disabled="disabled" type="password" />
          </div>
          <div class="username clearfix">
            <div class="label">
              <span>*</span>Email
            </div>
            <input type="text" :disabled="disabled" v-model="userInfo.email" />
          </div>
          <div class="username clearfix">
            <div class="label">
              <span>*</span>tel:
            </div>
            <input type="text" :disabled="disabled" v-model="userInfo.tel" />
          </div>
          <div v-if="!disabled" class="rememberpass">
            <el-button @click="updateUser">保存</el-button>
          </div>
        </div>
        <div class="bottom-right">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <div class="bottom-btns">
            <el-button style="width:113px;" plain class="personal-btn" @click="changeInfo">修改个人信息</el-button>
            <el-button class="exit-btn" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validata } from "../../utils/validata";
// @ is an alias to /src
import * as myAxios from "../../api/usermanage";
export default {
  name: "home",
  data() {
    return {
      disabled: true,
      userid: "",
      userInfo: {
          username: '',
          password: '',
          email: '',
          tel: '',
          repassword: ''
      }
    };
  },
  methods: {
    async findUser() {
        let that = this
      await myAxios.finduser({},this.$store.getters.userid).then(res => {
          console.log(res)
          that.userInfo = res.data.data
      })
    },
    logout(){
         this.$store.commit("FedLogOut");
         this.$router.push({
             name: 'home'
         })
    },
    async updateUser(){
        let that = this
        await myAxios.updateUser(this.userInfo.userid,this.userInfo).then(res => {
            if(res.data.success){    
                that.$message.success(res.data.msg)
                that.disabled = true
                that.findUser()
            }else{
                that.$message.error(res.data.msg)
                that.disabled = true
            }
        })
    },
    changeInfo(){
        this.disabled = false
    },
    gotoHome() {
      this.$router.push({
        name: "home"
      });
    },
    gotoLogin() {
      this.$router.push({
        name: "login"
      });
    }
  },
  computed: {},
  created() {
    this.userid = this.$store.getters.userid;
    this.findUser()
  },
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
      margin-top: 20px;
      border-top: 1px solid #55555530;
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
            width: 16%;
            span {
              color: red;
            }
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
            width: 16%;
            float: left;
            span {
              color: red;
            }
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
          margin-top: 20px;
        }
      }
      .bottom-right {
        width: 100%;
        flex: 1;
        text-align: center;
        padding: 0 0 30px 0;
        box-sizing: border-box;
        .bottom-btns {
          width: 100%;
          margin-top: 20px;
          box-sizing: border-box;
          display: flex;
          text-align: center;
        }
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
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