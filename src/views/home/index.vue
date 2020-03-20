<template>
  <div class="home-body clearfix">
    <div class="body-top clearfix">
      <div class="body-left">

        <!-- <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,index) in imglist" :key="index">
            <div @click="gotoNotice('notice',item.id)" class="slide-item">
              <img :src="item.url" />
              <div class="title">{{item.title}}</div>
            </div>
          </el-carousel-item>
        </el-carousel> -->

        <swiper class="wrapper" :options="swiperOption">
          <swiper-slide v-for="(item,index) in imglist" :key="index">
            <div @click="gotoNotice('notice',item.id)" class="slide-item">
              <img :src="item.cover" />
              <div class="title">{{item.title}}</div>
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="paginatxion"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="body-right">
        <div class="right-top clearfix">
          <div class="title-name" style="float:left;">校园公告</div>
          <!-- <div class="more" style="float:right;" @click="gotoMore('news')">更多>></div> -->
        </div>
        <div class="right-bottom">
          <ul style="padding:0px">
            <li
              v-for="(item,index) in schoolnotices"
              @click="gotoNotice('notice',item.id)"
              :key="index"
            >{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="body-bottom clearfix">
      <div class="bottom-left clearfix">
        <div class="left-ul">
          <div class="left-ul-title clearfix">
            <div class="title-name" style="float:left;">校园新闻</div>
            <div class="more" style="float:right" @click="gotoMore('news')">更多>></div>
          </div>
          <div
            v-for="(item,index) in schoolnews"
            @click="gotoNotice('news',item.id)"
            class="left-ul-item clearfix"
            :key="index"
          >
            <span style="float:left;">{{item.title}}</span>
            <span class="time" style="float:right;">{{ parseTime(item.createtime)}}</span>
          </div>
        </div>
        <div class="right-ul">
          <div class="right-ul-title clearfix">
            <div class="title-name" style="float:left;">高考信息</div>
            <div class="more" style="float:right" @click="gotoMore('examination')">更多>></div>
          </div>
          <div
            v-for="(item,index) in mediaschool"
            :key="index"
            @click="gotoNotice('examination',item.id)"
            class="right-ul-item clearfix"
          >
            <span style="float:left;">【{{item.author}}】</span>
            <span style="float:left;">{{item.title}}</span>
            <span style="float: right;" class="time">{{parseTime(item.createtime)}}</span>
          </div>
        </div>
      </div>
      <div class="bottom-right">
        <div class="box">
          <div class="box-title">快速导航</div>
          <div class="box-one clearfix">
            <div class="rowone">
              <div class="box-item" @click="gotoNar('student')">
                <img class="box-item-img" src="@/assets/img/zhaoshengtongji.png" alt />
                <div class="box-item-title">学子</div>
              </div>
              <div class="box-item" @click="gotoNar('teacher')">
                <img class="box-item-img" src="@/assets/img/yonghu.png" alt />
                <div class="box-item-title">师资</div>
              </div>
              <div class="box-item" @click="gotoNar('album')">
                <img class="box-item-img" src="@/assets/img/pengyouquan.png" alt />
                <div class="box-item-title">相册</div>
              </div>
              <div class="box-item" @click="gotoNar('library')">
                <img class="box-item-img" src="@/assets/img/tushuguan.png" alt />
                <div class="box-item-title">图书馆</div>
              </div>
            </div>
            <div class="rowtwo">
              <div class="box-item" @click="gotoNar('cyl')">
                <img class="box-item-img" src="@/assets/img/shijie.png" alt />
                <div class="box-item-title">团委</div>
              </div>
              <div class="box-item" @click="gotoNar('research')">
                <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
                <div class="box-item-title">教研</div>
              </div>
              <div class="box-item" @click="gotoNar('examination')">
                <img class="box-item-img" src="@/assets/img/naozhong.png" alt />
                <div class="box-item-title">高考</div>
              </div>
              <div class="box-item" @click="gotoNar('news')">
                <img class="box-item-img" src="@/assets/img/trophy_icon.png" alt />
                <div class="box-item-title">新闻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from "../../utils";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// @ is an alias to /src
import * as noticeAxios from "../../api/noticemanage";
import * as examAxios from "../../api/examinationmanage";
import * as newsAxios from "../../api/newsmanage";

export default {
  name: "home",
  data() {
    return {
      // 首页轮播
      imglist: [
        // {
        //   url:
        //     "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3251757891,2905627848&fm=26&gp=0.jpg",
        //   title: "这是测试标题1"
        // }
      ],
      // 高考
      mediaschool: [],
      // 校园新闻
      schoolnews: [],
      // 校园公告
      schoolnotices: [],
      // /swiper属性
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      reqData: {
        pageNo: 1,
        pageSize: 6,
        pageCount: "",
        id: "",
        title: ""
      }
    };
  },
  methods: {
    gotoNar(type){
      this.$router.push({
        name: type
      })
    },
    // 更多
    gotoMore(type) {
      this.$router.push({
        name: type
      });
    },
    // 详情
    gotoNotice(type, id) {
      this.$router.push({
        name: "notice",
        query: {
          name: type,
          id: id
        }
      });
    },
    // 获取公告信息
    async getList() {
      let that = this;
      await noticeAxios.getNotices(this.reqData).then(res => {
        console.log(res);
        that.imglist = res.data.list;
        this.schoolnotices = res.data.list;
      });
    },
    // 获取校园公告
    async getNews() {
      let that = this;
      await newsAxios.list(this.reqData).then(res => {
        that.schoolnews = res.data.list;
      });
    },
    // 高考信息
    async getExamination() {
      let that = this;
      await examAxios.list(this.reqData).then(res => {
        that.mediaschool = res.data.list;
      });
    },
    parseTime
  },
  created() {
    this.getList();
    this.getNews();
    this.getExamination();
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #666;
$green: #6fb5a7;
.more {
  font-size: 13px;
  line-height: 30px;
  cursor: pointer;
}
.time {
  color: #00000060;
}
.home-body {
  padding: 20px;
  box-sizing: border-box;
}
.box {
  height: 290px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.box-item {
  flex: 1;
  background: $green;
  width: 24%;
  height: 109px;
  border: 1px solid #ffffff;
  text-align: center;
  cursor: pointer;
}

.box-item-img {
  margin-top: 20px;
  box-sizing: border-box;
}
.box-item-title {
  color: #ffffff;
}
.box-one {
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  box-sizing: border-box;
  padding: 20px 0 0 0;
}
.rowone {
  flex: 1;
  display: flex;
  width: 100%;
  height: 109px;
  .box-item:nth-of-type(even) {
    background: #6fb5a760;
  }
  .box-item:nth-of-type(odd) {
    background: $green;
  }
}
.rowtwo {
  flex: 1;
  display: flex;
  width: 100%;
  height: 109px;
  .box-item:nth-of-type(even) {
    background: $green;
  }
  .box-item:nth-of-type(odd) {
    background: #6fb5a760;
  }
}
.box-item:hover {
  background: blue;
}
.box-title {
  background: $green;
  height: 38px;
  line-height: 33px;
  color: #ffffff;
  font-size: 21px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
}
.left-ul-item {
  font-size: 16px;
  background: $white;
  list-style: none;
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  border-left: 2px solid #66666660;
  margin-top: 20px;
  margin-right: 30px;
}
.left-ul-item:hover {
  cursor: pointer;
  color: orange;
  text-decoration: underline;
}
.right-ul-item {
  font-size: 15px;
  background: $white;
  list-style: none;
  padding: 0 15px 0 15px;
  box-sizing: border-box;
  border-left: 2px solid #66666660;
  margin-top: 20px;
  margin-right: 30px;
}
.right-ul-item:hover {
  cursor: pointer;
  color: orange;
  text-decoration: underline;
}
.left-ul-title {
  background: $blue;
  color: #ffffff;
  text-align: left;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
}
.right-ul-title {
  background: orange;
  color: #ffffff;
  text-align: left;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
}
.left-ul {
  float: left;
  height: 290px;
  width: 48%;
  // border: 1px solid black;
}
.right-ul {
  list-style: none;
  float: right;
  height: 290px;
  width: 50%;
  // border: 1px solid fuchsia;
}
.bottom-left {
  width: 68%;
  min-height: 290px;
  // border: 1px solid orange;
  float: left;
}
.bottom-right {
  float: right;
  width: 30%;
  min-height: 290px;
  // border: 1px solid green;
  .box {
    width: 100%;
    height: 290px;
  }
}
.right-top {
  background: $blue;
  color: #ffffff;
  text-align: left;
  font-size: 21px;
  padding: 5px;
  box-sizing: border-box;
}
.right-bottom {
  li {
    font-size: 15px;
    background: $white;
    list-style: none;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    border-left: 3px solid #66666650;
    margin-top: 10px;
    margin-right: 30px;
  }
  li:hover {
    cursor: pointer;
    color: orange;
    text-decoration: underline;
  }
}
.body-bottom {
  box-sizing: border-box;
  width: 100%;
  margin-top: 30px;
}
.slide-item {
  position: relative;
  .title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    background: #555;
    opacity: 0.7;
    text-align: left;
    font-size: 22px;
    color: #ffffff;
    font-weight: bold;
  }
}

.el-pagination {
  padding: 20px 0 0 0;
}
.wrapper {
  img {
    width: 100%;
    height: 340px;
  }
}
.body-left {
  width: 68%;
  float: left;
}
.body-right {
  width: 30%;
  min-height: 340px;
  float: right;
}
</style>