<template>
  <div class="layout-main">
    <div class="nav-header clearfix">
      <div class="login-header">
        <span v-if="!login" class="login-box" @click="Login">登录</span>
        <template v-if="login">
          <router-link :to="{name:'my'}">
            <span style="color:#ffffff;" class="login-box">
              <i class="el-icon-s-custom"></i>
              {{username}}
            </span>
          </router-link>
        </template>
        <template v-if="!login">
          <router-link :to="{name:'register'}">
            <span style="color:#ffffff;" class="about">注册</span>
          </router-link>
        </template>
        <span v-if="login" class="exit" @click="Logout">
          <i class="el-icon-switch-button"></i>
          退出登录
        </span>
      </div>
    </div>
    <div class="layout">
      <NavBar class="layout-one"></NavBar>
      <keep-alive>
        <SideBar class="layout-two"></SideBar>
      </keep-alive>
    </div>
    <AppMain class="layout-body"></AppMain>
  </div>
</template>

<script>
const AppMain = () => import("./components/AppMain");
const SideBar = () => import("./components/SideBar");
const NavBar = () => import("./components/NavBar");
// const Tags = () => import("./components/Tags");
export default {
  name: "layout",
  data() {
    return {
      login: false,
      username: ""
    };
  },
  components: {
    AppMain: AppMain,
    SideBar: SideBar,
    NavBar: NavBar
  },
  //  computed:{
  //   itemList(){
  //     return this.$store.getters.itemList
  //   }
  // },
  // watch: {
  //   itemList:function() {
  //       this.audioList = this.$store.getters.itemList[0]
  //       this.videoList = this.$store.getters.itemList[1]
  //       console.log(this.audioList)
  //       console.log(this.videoList)
  //   }
  // },
  computed: {
    UserLogin() {
      return this.$store.getters.login;
    }
  },
  watch: {
    UserLogin: function() {
      this.login = this.$store.getters.login;
    }
  },
  methods: {
    Logout() {
      this.$store.commit("FedLogOut");
      console.log(this.$store);
    },
    Login() {
      this.$router.push({
        name: "login"
      });
    }
  },
  created() {
    this.login = this.$store.getters.login;
    this.username = this.$store.getters.username;
    console.log(this.login);
    console.log(this.username);
    console.log(this.$store);
  }
};
</script>

<style lang="scss" scoped>
.login-header {
  // width: 114px;
  float: right;
  color: #ffffff;
  line-height: 37px;
  .login-box:hover {
    cursor: pointer;
    color: orange;
  }
  .login-box {
    margin-right: 10px;
    box-sizing: border-box;
  }
  .about {
    margin-right: 5px;
    box-sizing: border-box;
  }
  .exit:hover {
    color: orange;
    cursor: pointer;
  }
  .about:hover {
    color: orange;
    cursor: pointer;
  }
}
.layout-one {
  padding: 0 10% 0 10%;
  box-sizing: border-box;
}
.layout {
  background-image: url("../../assets/img/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 68px 0 0 0;
  box-sizing: border-box;
}
.layout-two {
  padding: 0 10% 0 10%;
  box-sizing: border-box;
}
.layout-body {
  padding: 20px 10% 20px 10%;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #a1def3 0%, #ffffff 100%);
  min-height: 700px;
}
.nav-header {
  width: 100%;
  height: 40px;
  background: #555;
  opacity: 0.7;
  position: absolute;
  padding: 0 10% 0 10%;
  box-sizing: border-box;
}
</style>