<template>
  <section class="app-main">
    <div class="app-main-container">
      <transition name="el-zoom-in-top">
          <router-view></router-view>
      </transition>
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
  overflow: auto;
}
.app-main-container {
  height: 100%;
  box-shadow: 0 0 1px 0 #000000;
  background: #fff;
  box-sizing: border-box;
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


