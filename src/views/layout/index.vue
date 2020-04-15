<template>
  <div class="layout-main clearfix">
    <SideBar :isCollapse="collapse" class="body-left"></SideBar>
    <div :class="{'layout-body':true}" :style="collapse==true?style:''">
        <NavBar @isCollapse="isCollapse" class="layout-header"></NavBar>
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
    return {
      collapse: false,
      style: {
        width: "95%"
      }
    };
  },
  methods: {
    isCollapse(Collapse) {
      console.log(Collapse);
      this.collapse = Collapse;
    }
  },
  components: {
    AppMain: AppMain,
    SideBar: SideBar,
    NavBar: NavBar
  }
};
</script>

<style lang="scss" scoped>
.layout-main {
  .body-left {
    height: 100vh;
    float: left;
  }
  .layout-body {
    border-left: 1px solid #f5f5f5;
    float: right;
    width: 85%;
    height: 100vh;
    .layout-header {
      height: 9vh;
      background: #f5f5f5;
    }
    .body-right {
      height: 91vh;
    }
  }
}

.collBody {
  width: 95%;
}
</style>