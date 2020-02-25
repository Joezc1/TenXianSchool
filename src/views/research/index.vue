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

// 通用属性
</style>

<template>
  <div class="partybuild-main clearfix">
    <div class="main-left">
      <sectionpart
        :topoptions="topoption"
        :bottomoptions="bottomoption"
        @handleSearch="handleSearch"
        @handleTop="handleTop"
        @handleBottom="handleBottom"
      ></sectionpart>
    </div>
    <div class="main-right">
      <sectionright :topoptions="topoption" @gotoMore="gotoMore" @gotoText="gotoText"></sectionright>
    </div>
  </div>
</template>

<script>
import sectionpart from "../../components/section-left";
import sectionright from "../../components/section-right"
import { parseTime } from "../../utils";
// @ is an alias to /src
import * as myAxios from "../../api/researchmanage";
import store from "../../store";
export default {
  name: "home",
  data() {
    return {
      socket: null,
      reqData: {
        pageNo: 1,
        pageSize: 2,
        pageCount: "",
        title: ""
      },
      topoption: {
        title: "教研",
        list: [
          {
            name: "科研动态",
            type: 1,
            list: [
              
            ]
          },
          {
            name: "教学反思",
            type: 2,
            list: [
             
            ]
          },
        
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
    // 跳转到notice详情
    gotoText(id,type){
      console.log("文章"+id)
      this.$router.push({
        name: 'notice',
        query:{
          id,
          type,
          name: 'research'
        }
      })
    },
    gotoMore(type){
      sessionStorage.topoption = JSON.stringify(this.topoption)
        this.$router.push({
        name: "news_more",
        query: {
          type: type,
          name: 'news'
        }
      });
    },
    // promise的all获取
    getList(type){
      let that =this
      let a = new Promise((resolve,reject) =>{
        myAxios.typeresearch(1,this.reqData).then(res=>{
          let data = res.data
          that.topoption.list[0].list = data.list
          resolve(res)
        })
      })
      let b = new Promise((resolve,reject) =>{
        myAxios.typeresearch(2,this.reqData).then(res=>{
          let data = res.data
          that.topoption.list[1].list = data.list
          resolve(res)
        })
      })
        
      Promise.all([a,b]).then(res => {
        console.log("打印")
        console.log(res)
      })
    },
      // 创建websocket
    parseTime,
    handleTop(type){
      console.log("上面"+type)
      this.gotoMore(type)
    },
    handleSearch(value){
      console.log("搜索"+value)
      sessionStorage.topoption = JSON.stringify(this.topoption)
        this.$router.push({
        name: "research_more",
        query: {
          type: 'null',
          name: 'research',
          title: value
        }
      });
    },
    handleBottom(v) {
      console.log("下面" + v);
    }
  },
  created() {
    this.getList()
  },
  components: {
    sectionright,
    sectionpart
  }
};
</script>
