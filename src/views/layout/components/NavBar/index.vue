<template>
  <div class="navbar-main">
    <div class="navbar-left">
      <img src="@/assets/img/logo1.png" alt="">
    </div>
    <div class="navbar-right">
      <img src="@/assets/img/xiaoxun.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    handleCommand(e) {
      console.log(e);
      if (e == "c") {
        this.$store.commit("FedLogOut");
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.navbar-main {
  width: 100%;
  overflow-x: hidden;
  .navbar-left {
    box-sizing: border-box;
    color: #ffffff;
    float: left;
    font-size: 19px;
    line-height: 50px;
    font-weight: bold;

    img{
      width: 385px;
    }
  }
  .navbar-right {
    float: right;
    img {
      box-sizing: border-box;
      width: 478px;
      height: auto;
      margin-right: 35px;
    }
  }
}

</style>