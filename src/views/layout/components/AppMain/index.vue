<template>
  <section class="app-main">
    <div class="app-main-container">
      <!-- <transition name="el-zoom-in-top"> -->
      <!-- <keep-alive> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
      <!-- </transition> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
.app-main-container {
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.app-main-container::-webkit-scrollbar {
  width: 0 !important;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>


