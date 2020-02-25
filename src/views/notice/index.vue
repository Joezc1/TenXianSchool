
<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #ccc;
$green: #6fb5a7;
$lightgray: #999999;
.el-pagination {
  padding: 20px 0 0 0;
}
.main {
  background: #ffffff;
}
.main-left {
  // width: 20%;
  // float: left;
  // min-height: 600px;
  // border-right: 1px solid $gray;
  // background: #ffffff;
}
.main-right {
  background: #ffffff;
  // float: right;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.article-title {
  text-align: center;
  color: orange;
}
.article-author {
  width: 100%;
  font-size: 13px;
  line-height: 38px;
  height: 40px;
  background: #e9f8ff;
  border: dashed 1px #e9f8ff;

  display: flex;
  .author {
    flex: 1;
    text-align: right;
    margin-right: 272px;
    box-sizing: border-box;
  }
  .createtime {
    text-align: left;
    flex: 1;
  }
}
.article-article {
  margin-top: 30px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="main clearfix">
    <div class="main-left">
      <!-- <sectionLeft
        :topoptions="topoption"
        :bottomoptions="bottomoption"
        @handleSearch="handleSearch"
        @handleTop="handleTop"
        @handleBottom="handleBottom"
      ></sectionLeft> -->
    </div>
    <div class="main-right">
      <div class="article">
        <h1 class="article-title">{{article.title}}</h1>
        <div class="article-author clearfix">
          <div class="author">作者:{{article.author}}</div>
          <div class="createtime">发布时间:{{parseTime(article.createtime)}}</div>
        </div>
        <div class="article-article" v-html="article.detail"></div>
      </div>
    </div>
  </div>
</template>

<script>
const sectionLeft = () => import("@/components/section-left");
const sectionRight = () => import("@/components/imgsection");
import { parseTime } from "../../utils";
import store from "../../store"
// @ is an alias to /src
import * as albumAxios from "../../api/albummanage";
import * as cylAxios from "../../api/cylmanage";
import * as examinationAxios from "../../api/examinationmanage";
import * as libraryAxios from "../../api/librarymanage";
import * as newsAxios from "../../api/newsmanage";
import * as researchAxios from "../../api/researchmanage";
import * as schoolhistoryAxios from "../../api/schoolhistorymanage";
import * as studentAxios from "../../api/studentmanage";
import * as surveyAxios from "../../api/surveymanage";
import * as teacherAxios from "../../api/teachermanage";

export default {
  name: "home",
  data() {
    return {
      socket: null,
      reqData: {
        pageNo: 1,
        pageSize: 10,
        pageCount: ""
      },
      article: {
        createtime: "",
        author: "",
        title: "",
        article:""
      },
      topoption: {
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
    // 加载文章详情
    getArticle(id,name){
      let that = this    
      switch (name){
        case 'album':
          albumAxios.detail(id).then(res => {
               let data = res.data
            that.article = data.data
          })
          break
        case 'cyl':
          cylAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'examination':
          examinationAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'library':
          libraryAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'news':
          newsAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'research':
          researchAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          }) 
          break
        case 'schoolhistory':
          schoolhistoryAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'student':
          studentAxios.detail(id).then(res=>{
            let data = res.data
            that.article = data.data
          })
          break
        case 'survey':
          surveyAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
        case 'teacher':
          teacherAxios.detail(id).then(res => {
            let data = res.data
            that.article = data.data
          })
          break
      }
    },
    // 创建websocket
    parseTime,
    handleTop(type) {
      console.log("上面" + type);
    },
    handleSearch(value) {
      console.log("搜索" + value);
    },
    handleBottom(type) {
      console.log("底部" + type);
    },
    gotoText(id) {
      console.log("文章" + id);
    },
    gotoMore(type) {
      console.log("more" + type);
      this.$router.push({
        name: "schoolhistory_more",
        query: {
          type: type
        }
      });
    }
  },
  created() {
    // 获取文章
    // this.topoption = store.state.topoption
    this.getArticle(this.$route.query.id,this.$route.query.name)
  },
  components: {
    sectionLeft,
    sectionRight
  }
};
</script>
