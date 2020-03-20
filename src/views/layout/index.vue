<template>
  <div class="layout-main">
    <NavBar class="layout-header"></NavBar>
    <div class="layout-body">
      <keep-alive>
        <SideBar class="body-left"></SideBar>
      </keep-alive>
      <AppMain class="body-right"></AppMain>
    </div>
  </div>
</template>

<script>
const AppMain = () => import("./components/AppMain");
const SideBar = () => import("./components/SideBar");
const NavBar = () => import("./components/NavBar");
export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    AppMain: AppMain,
    SideBar: SideBar,
    NavBar: NavBar,
  }
};
</script>

<style lang="scss" scoped>
.layout-main {
  .layout-header {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #4DB3B3;
  }
  .layout-body {
    width: 100%;
    height: 90vh;
    overflow-x: hidden;
    .body-left {
      background-color: #4DB3B3;
      float: left;
      width: 13%;
      height: 100%;
    }
    
    .body-right {
      float: right;
      width: 87%;
      height: 100%;
    }
    // .body-right:hover {
    //   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.7);
    // }
  }
  .layout-body::after {
    clear: both;
    height: 0;
    font-size: 0;
    display: block;
    visibility: hidden;
    content: "";
  }
}
</style>