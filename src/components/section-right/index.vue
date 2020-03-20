<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #ccc;
$green: #6fb5a7;
$lightgray: #999999;
.right-box {
  width: 100%;
  border-left: 1px solid $gray;
  border-right: 1px solid $gray;
  border-bottom: 1px solid $gray;
  border-top: 4px solid $blue;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  .right-box-title {
    width: 100%;
    border-bottom: 1px dashed $gray;
    .right-box-title-one {
      font-size: 23px;
      float: left;
      color: $blue;
    }
    .more-text {
      float: right;
      color: $lightgray;
    }
  }
  .right-box-item {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid $gray;
    .item-left {
      float: left;
      width: 15%;
      .item-left-img {
        width: 100%;
      }
    }
    .item-title {
      width: 100%;
      .title-text {
        font-size: 22px;
        padding: 0 0 15px 0;
      }
    }
    .item-right {
      width: 85%;
      float: right;
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
    }
  }
}
</style>

<template>
  <div>
     <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :to="{ path: item.path }" :key="index" separator="/">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    <!-- 文章布局 -->
    <div class="right-box" v-for="(item,index) in topoptions.list" :key="index">
      <div class="right-box-title clearfix">
        <div class="right-box-title-one">{{item.name}}</div>
        <div class="more-text" @click="gotoMore(item.type)">更多>></div>
      </div>
      <div class="right-box-item clearfix" v-for="(v,i) in item.list" @click="gotoText(v.id,item.type)" :key="i">
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
    </div>
  </div>
</template>

<script>
import { parseTime } from "../../utils";

export default {
  name: "section-right",
  data() {
    return {
        
    }
  },
  watch:{
    $route:{
      getBreadList(){
        $route.matched.forEach(element => {
          this.breadlist.push(element)
        });
      }
    }
  },
  props: {
    topoptions: {
      type: Object
    }
  },
  methods:{
    parseTime,
      gotoMore(type){
          this.$emit('gotoMore',type)
      },
      gotoText(textid,type){
          this.$emit('gotoText',textid,type)
      }
  },
  created(){
      console.log(this.$route)
  }
};
</script>