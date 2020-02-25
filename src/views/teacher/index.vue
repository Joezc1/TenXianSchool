
<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #ccc;
$green: #6fb5a7;
$lightgray: #999999;
.el-pagination {
  padding: 20px 0 0 0;
}
.main{
  background: #ffffff;
}
.main-left {
  width: 20%;
  float: left;
  min-height: 600px;
  border-right: 1px solid $gray;
  background: #ffffff;
}
.main-right {
  background: #ffffff;
  float: right;
  width: 79%;
  padding: 20px;
  box-sizing: border-box;
}
</style>

<template>
     <div class="main clearfix">
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
      <sectionRight :topoptions="topoption" @gotoMore="gotoMore" @gotoText="gotoText"></sectionRight>
       </div>
     </div>
</template>

<script>
const sectionLeft = () => import("@/components/section-left");
const sectionRight = () => import("@/components/imgsection");
import { parseTime } from "../../utils";
// @ is an alias to /src
import * as myAxios from "../../api/teachermanage";
import store from "../../store";
export default {
  name: "home",
  data() {
    return {
      socket: null,
      reqData: {
        pageNo: 1,
        pageSize: 10,
        pageCount: "",
        title: ""
      },
        topoption: {
        title: "教师",
        list: [
          {
            name: "教研组",
            type: 1,
            list: [
             
            ]
          },
          {
            name: "名师队伍",
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
     }
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
          name: 'teacher'
        }
      })
    },
    gotoMore(type){
      sessionStorage.topoption = JSON.stringify(this.topoption)
        this.$router.push({
        name: "teacher_more",
        query: {
          type: type,
          name: 'teacher'
        }
      });
    },
    // promise的all获取
    getList(type){
      let that =this
      let a = new Promise((resolve,reject) =>{
        myAxios.typeteacher(1,this.reqData).then(res=>{
          let data = res.data
          that.topoption.list[0].list = data.list
          resolve(res)
        })
      })
      let b = new Promise((resolve,reject) =>{
        myAxios.typeteacher(2,this.reqData).then(res=>{
          let data = res.data
          that.topoption.list[1].list = data.list
          resolve(res)
        })
      })
    
      Promise.all([a,b]).then(res => {
        console.log("打印")
        console.log(that.topoption)
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
        name: "teacher_more",
        query: {
          type: 'null',
          name: 'teacher',
          title: value
        }
      });
    },
    handleBottom(type){
      console.log("底部"+type)
    },
  },
  created() {
    this.getList()
  },
  components: {
    sectionLeft,
    sectionRight
  }
};
</script>
