<template>
  <div class="navbar-main clearfix">
    <div class="CollapseBox" @click="isColl">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>
    <div class="navbar-left">藤县中学官网后台管理系统</div>
    <div class="navbar-right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="@/assets/img/avtar.png" />
          <span style="color: #000000;">{{username}}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="c" icon="el-icon-circle-plus-outline">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      isCollapse:false,
      username: ""
    };
  },
  methods: {
    isColl(){
      this.isCollapse = !this.isCollapse
      this.$emit("isCollapse",this.isCollapse)
    },
    handleCommand(e) {
      console.log(e);
      if (e == "c") {
        this.$store.commit("FedLogOut");
        this.$router.push("/");
      }
    }
  },
  created() {
    this.username = localStorage.getItem("username");
  }
};
</script>

<style lang="scss" scoped>
.CollapseBox{
  float: left;
  padding: 10px 0 10px 12px;
  box-sizing: border-box;
  i{
    font-size: 35px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  flex-direction: column;
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
  height: 10vh;
  overflow-x: hidden;
  overflow-y: hidden;
  .navbar-left {
    box-sizing: border-box;
    color: #000;
    float: left;
    font-size: 19px;
    line-height: 50px;
    font-weight: bold;
    margin-left: 16px;
  }
  .navbar-right {
    float: right;
    margin-right: 10px;
    img {
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>