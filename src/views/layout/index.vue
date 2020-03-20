<template>
  <div class="layout-main">
    <div class="nav-header clearfix">
      <div class="login-header">
        <span class="login-box" @click="login">登录</span>
        <span class="about">关于我们</span>
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
    return {};
  },
  components: {
    AppMain: AppMain,
    SideBar: SideBar,
    NavBar: NavBar
  },
  methods: {
    login(){
      this.$router.push({
        name: 'login'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login-header {
  width: 114px;
  float: right;
  color: #ffffff;
  line-height: 37px;
  .login-box:hover {
    cursor: pointer;
    color: orange;
  }
  .login-box{
    margin-right: 10px;
    box-sizing: border-box;
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