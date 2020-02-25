<template>
  <div class="section-main">
    <div class="section-top">
      <div class="top-box">
        <div class="box-title">
          <i class="el-icon-price-tag"></i>
          {{topoptions.title}}
        </div>
        <div class="box-list">
          <div
            class="list-item"
            @click="handleTop(item.type)"
            v-for="(item,index) in topoptions.list"
            :key="index"
          >
          <i class="el-icon-caret-right"></i>
          {{item.name}}</div>
        </div>
      </div>
    </div>

    <div class="section-center clearfix">
      <div class="search-box">
        <div class="search-box-one">网站搜索</div>
        <div class="search-box-two">
          <el-input v-model="searchvalue" placeholder="请输入搜索内容"></el-input>
          <el-button @click="handleSearch" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
    </div>

    <div class="section-bottom">
      <div class="bottom-title">{{bottomoptions.title}}</div>
      <div class="bottom-list">
        <div
          :class="{'bottom-list-item':true,'one':index==0}"
          @click="handleBottom(item.type)"
          v-for="(item,index) in bottomoptions.list"
          :key="index"
        >{{index}}
        {{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from "../../utils";
// @ is an alias to /src
export default {
  name: "home",
  props: {
    //   topoptions:{
    // title：'',
    // list: [
    // {
    //name: '名字'
    // type:1,
    // }
    // ],
    // }
    topoptions: {
      type: Object
    },
    //   bottomoptions:{
    // title：'',
    // list: [
    // {
    //name: '名字'
    // type:1,
    // }
    // ],
    // }
    bottomoptions: {
      type: Object
    }
  },
  data() {
    return {
      searchvalue: ""
    };
  },
  methods: {
    handleBottom(value) {
      this.$emit("handleBottom", value);
    },
    handleTop(value) {
      this.$emit("handleTop", value);
    },
    handleSearch() {
      this.$emit("handleSearch", this.searchvalue);
    }
  },
  created() {
    console.log(this.topoptions);
    console.log(this.bottomoptions);
  },
  components: {}
};
</script>

<style lang="scss" scoped>
$blue:rgb(31, 114, 167);
$white: #f5f5f5;
$gray: #666;
$green: #6fb5a7;
$orange:#ed8233;
.search-box {
  background: $blue;
}
.box-list{
    padding: 5px;
}
.search-box-two {
    margin-top: 10px;
  .el-button {
    width: 65px;
    height: 30px;
    padding: 0;
  }
}
.bottom-list-item{
    padding: 5px;
    box-sizing: border-box;
    border-bottom: 1px dashed $gray;
    font-style: oblique;
}
.bottom-list-item:hover{
    color: orange;
    cursor: pointer;
}
.bottom-list-item:active{
    color: $blue;
}
.bottom-title{
    border-top: 4px solid $gray;
    font-size: 22px;
}
.one{
    color:red;
    font-size: 21px;
}
.section-top {
  padding: 20px;
  box-sizing: border-box;
  .top-box {
    background: $blue;
  }
  .box-title {
    font-size: 30px;
    color: #fff;
    padding: 10px;
  }
  .list-item {
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
  }
  .list-item:hover{
    color: $blue;
    background: #fff;
  }
  .list-item:active{
      color: $orange;
  }
  .el-icon-price-tag {
    transform: rotate(30deg);
  }
}
.section-center {
  box-sizing: border-box;
  padding: 20px;
  .el-input {
    float: left;
    width: 65%;
  }
  .el-input /deep/ input {
    height: 30px;
  }
  .el-button {
    margin-left: 5px;
  }
  i {
    float: left;
  }
  .search-box {
    padding: 10px;
  }
  .search-box-one {
    color: #fff;
    font-size: 20px;
  }
}
.section-bottom {
  box-sizing: border-box;
  padding: 20px;
}
.section-main {
  width: 100%;
  height: 100%;
}
</style>