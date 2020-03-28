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

.main-right {
  width: 100%;
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
.item-left {
  float: left;
  // width: 277px;
  width: 30%;
  height: 255px;
  margin-right: 20px;
  // box-shadow: 0 2px 30px rgba(0,0,0,0.1);
  box-sizing: border-box;
  background: #f5f5f5;
  border: 5px solid #ccc;
  margin-bottom: 30px;
}
.item-left:hover {
  border: 5px solid $blue;
}
.item-left-img {
  width: 100%;
  height: 184px;
}
.item-left-title {
  text-align: center;
  line-height: 40px;
}
// 通用属性
</style>

<template>
  <div class="partybuild-main clearfix">
    <div class="main-right">
      <div class="right-box-item clearfix">
        <div class="item-left" v-for="(v,i) in morelist" @click="gotoText(v.id,v.type)" :key="i">
          <img class="item-left-img" :src="v.cover" alt />
          <div class="item-left-title">{{v.title}}</div>
        </div>
      </div>
      <el-pagination
        layout="prev, pager, next"
        @current-change="changeCurrent"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import sectionpart from "../../components/section-left";
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
   
    changeCurrent(type) {
      this.$emit("changeCurrent" + type);
    },
    gotoText(textid,type){
      this.$emit('gotoText',textid,type)
    }
  },
  created() {},
  components: {
    sectionpart
  }
};
</script>
