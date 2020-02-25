<style lang="scss" scoped>
.partybuild-main {
  width: 100%;
}
.el-pagination {
  padding: 20px 0 0 0;
}
// 通用属性
$blue: #409eff;
$white: #f5f5f5;
$gray: #ccc;
$green: #6fb5a7;
$lightgray: #999999;
.main-left {
  width: 20%;
  float: left;
  min-height: 600px;
  border-right: 1px solid $gray;
}
.main-right {
  float: right;
  width: 79%;
  padding: 20px;
  box-sizing: border-box;
}
.right-box-title {
  width: 100%;
  border-bottom: 1px dashed $gray;
}
.more-text {
  float: right;
  color: $lightgray;
}
.right-box-title-one {
  font-size: 23px;
  float: left;
  color: $blue;
}
.item-left {
  float: left;
  width: 15%;
}
.item-left-img {
  width: 100%;
}
.item-title {
  width: 100%;
}
.title-text {
  font-size: 22px;
  padding: 0 0 15px 0;
}
.right-box-item {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid $gray;
}
.item-right {
  width: 85%;
  float: right;
}
.item-right-top {
  width: 100%;
  color: #666;
  font-size: 15px;
  padding: 0 0 20px 0;
  box-sizing: border-box;
}
.item-right-bottom {
  width: 100%;
  color: #666;
  font-size: 14px;
}
.right-box {
  width: 100%;
  border-left: 1px solid $gray;
  border-right: 1px solid $gray;
  border-bottom: 1px solid $gray;
  border-top: 4px solid $blue;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
}
// 通用属性
</style>

<template>
  <div class="partybuild-main clearfix">
    <div class="right-box-item clearfix" v-for="(v,i) in morelist" @click="gotoText(v.id,v.type)" :key="i">
      <div class="item-title clearfix">
        <div class="title-text">{{v.title}}</div>
      </div>
      <div class="item-left">
        <img class="item-left-img" :src="v.cover" alt />
      </div>
      <div class="item-right">
        <div class="item-right-top" v-html="v.detail.substring(0,20)"></div>
        <div class="item-right-bottom">更新时间{{parseTime(v.createtime)}}</div>
      </div>
    </div>

    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="changeCurrent"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { parseTime } from "../../utils";
// @ is an alias to /src
import * as myAxios from "@/api/topicmanage";
export default {
  name: "home",
  props: {
    morelist: {
      type: Array
    },
    topoption: {
      type: Object
    },
    bottomoption: {
      type: Object
    },
    total: {
      type: Number
    }
  },
  data() {
    return {
      type: "",
      reqData: {
        pageNo: 1,
        pageSize: 10,
        pageCount: ""
      }
    };
  },
  methods: {
    // 创建websocket
    parseTime,
    handleSearch(v) {
      console.log("搜索" + v);
      this.$emit("handleSearch" + v);
    },
    handleTop(v) {
      console.log("上面" + v);
      this.$emit("handleTop" + v);
    },
    handleBottom(v) {
      console.log("下面" + v);
      this.$emit("handleBottom" + v);
    },
    changeCurrent(e) {
      this.$emit("changeCurrent" + e);
      console.log("打印分页" + e);
    },
    gotoText(textid,type){
      this.$emit('gotoText',textid,type)
    }
  },
  created() {},
  components: {}
};
</script>
