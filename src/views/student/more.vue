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
  width: 277px;
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
    <div class="main-left">
      <sectionLeft
        :topoptions="topoption"
        :bottomoptions="bottomoption"
        @handleSearch="handleSearch"
        @handleTop="handleTop"
        @handleBottom="handleBottom"
      ></sectionLeft>
    </div>
    <div class="main-right">
      <sectionRight
        @handleTop="handleTop"
        @handleBottom="handleBottom"
        @handleSearch="handleSearch"
        :morelist="morelist"
        @changeCurrent="changeCurrent"
        :topoption="topoption"
        :bottomoption="bottomoption"
        :total="total"
        @gotoText="gotoText"
      ></sectionRight>
    </div>
  </div>
</template>

<script>
const sectionLeft = () => import("@/components/section-left");
const sectionRight = () => import("@/components/moreimg");
import { parseTime } from "../../utils";
// @ is an alias to /src
import * as myAxios from "../../api/studentmanage";
import store from "../../store";
export default {
  name: "home",
  data() {
    return {
      type: "",
      reqData: {
        pageNo: 1,
        pageSize: 10,
        pageCount: "",
        title: ""
      },
      morelist: [
       
      ],
      topoption: {
        title: "学子",
        list: [
          {
            name: "学生会",
            type: 1
          },
          {
            name: "学生社团",
            type: 2
          }
        ]
      },
      bottomoption: {
        title: "热点",
        list: [
          {
            name: "梧州高中党委中心组集体学习…",
            type: 1
          },
          {
            name: "梧州高中党委中心组集体学习…",
            type: 2
          },
          {
            name: "梧州高中党委中心组集体学习…",
            type: 3
          },
          {
            name: "梧州高中党委中心组集体学习…",
            type: 4
          },
          {
            name: "梧州高中党委中心组集体学习…",
            type: 5
          }
        ]
      }
    };
  },
  methods: {
       getList() {
      let that = this;
      console.log("调用");
      console.log(this.$route.query.type)
      myAxios.typestudent(this.$route.query.type, this.reqData).then(res => {
        let data = res.data;
        that.morelist = data.list;
        that.total = parseInt(data.pageCount);
      });
    },
    gotoText(id, type) {
      console.log("文章" + id);
      this.$router.push({
        name: "notice",
        query: {
          id,
          type,
          name: "student"
        }
      });
    },
    parseTime,
    handleSearch(v) {
      console.log("搜索" + v);
      this.reqData.title = v;
      let that = this;
      myAxios.typestudent('null', this.reqData).then(res => {
        let data = res.data;
        that.morelist = data.list;
        that.total = parseInt(data.pageCount);
      });
    },
    handleTop(v) {
      let that = this;
      myAxios.typestudent(v, this.reqData).then(res => {
        let data = res.data;
        that.morelist = data.list;
        that.total = parseInt(data.pageCount);
      });
    },
    handleBottom(v) {
      console.log("下面" + v);
    },
    changeCurrent(e) {
      console.log(e);
      this.reqData.pageNo = e;
      this.getList();
    }
  },
  created() {
    this.topoption = JSON.parse(sessionStorage.topoption);
    this.reqData.title = this.$route.query.title || "";
    console.log(this.topoption);
    this.getList();
  },
  components: {
    sectionLeft,
    sectionRight
  }
};
</script>
