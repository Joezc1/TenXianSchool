<template>
  <div class="home-body clearfix">
    <div class="body-top clearfix">
      <div class="body-left">
        <swiper class="wrapper" :options="swiperOption">
          <swiper-slide v-for="(item,index) in imglist" :key="index">
            <div class="slide-item">
              <img :src="item.url" />
              <div class="title">{{item.title}}</div>
            </div>
          </swiper-slide>

          <div class="swiper-pagination" slot="paginatxion"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="body-right">
        <div class="right-top">校园公告</div>
        <div class="right-bottom">
          <ul>
            <li v-for="(item,index) in schoolnotices" :key="index">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="body-bottom clearfix">
      <div class="bottom-left clearfix">
        <div class="left-ul">
          <div class="left-ul-title">校园快讯</div>
          <div v-for="(item,index) in schoolnews" class="left-ul-item" :key="index">
            <span>{{item.title}}</span>
            <span>{{item.createtime}}</span>
          </div>
        </div>
        <div class="right-ul">
          <div class="right-ul-title">媒体高中</div>
          <div v-for="(item,index) in mediaschool" :key="index" class="right-ul-item">
            <span>{{item.author}}</span>
            <span>{{item.title}}</span>
            <span>{{item.createtime}}</span>
          </div>
        </div>
      </div>
      <div class="bottom-right">
        <div class="box">
          <div class="box-title">快速导航</div>
          <div class="box-one clearfix">
            <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
            </div>
             <div class="box-item">
              <img class="box-item-img" src="@/assets/img/zhengfufeiyinglijigou.png" alt />
              <div class="box-item-title">招生网</div>
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
import * as myAxios from "@/api/topicmanage";
export default {
  name: "home",
  data() {
    return {
      // 首页轮播
      imglist: [
        {
          url:
            "../../assets/img/backone.jpg",
          title: "这是测试标题1"
        },
        {
          url:
            "../../assets/img/backone.jpg",
          title: "这是测试标题2"
        },
        {
          url:
            "../../assets/img/backone.jpg",
          title: "这是测试标题3"
        }
      ],
      // 媒体高
      mediaschool: [
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        }
      ],
      // 校园快讯
      schoolnews: [
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        },
        {
          title: "奇思妙想探索科学",
          author: "江西日报",
          createtime: "10-09-9"
        }
      ],
      // 校园公告
      schoolnotices: [
        {
          title: "致梧州市民朋友的一封信"
        },
        {
          title: "致梧州市民朋友的一封信"
        },
        {
          title: "致梧州市民朋友的一封信"
        },
        {
          title: "致梧州市民朋友的一封信"
        }
      ],
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
        pageSize: 10,
        pageCount: ""
      }
    };
  },
  methods: {
    // 创建websocket
    parseTime
  },
  created() {},
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

.box-one{
  margin-top: 20px;
}
.box-item{
  background: $green;
  float: left;
  width: 24%;
  height: 109px;
  border: 1px solid #ffffff;
  text-align: center;
}
.box-title {
  background: $green;
  height: 50px;
  font-weight: bold;
  font-size: 21px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
}
.left-ul-item {
  font-size: 16px;
  background: $white;
  list-style: none;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  border-left: 2px solid $gray;
  margin-top: 20px;
  margin-right: 30px;
}
.right-ul-item {
  font-size: 16px;
  background: $white;
  list-style: none;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  border-left: 2px solid $gray;
  margin-top: 20px;
  margin-right: 30px;
}
.left-ul-title {
  background: $blue;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
  font-size: 21px;
  padding: 15px;
  box-sizing: border-box;
}
.right-ul-title {
  background: orange;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
  font-size: 21px;
  padding: 15px;
  box-sizing: border-box;
}
.left-ul {
  float: left;
  height: 290px;
  width: 45%;
  border: 1px solid black;
}
.right-ul {
  list-style: none;
  float: right;
  height: 290px;
  width: 45%;
  border: 1px solid fuchsia;
}
.bottom-left {
  width: 58%;
  min-height: 290px;
  border: 1px solid orange;
  float: left;
}
.bottom-right {
  float: right;
  width: 35%;
  min-height: 290px;
  border: 1px solid green;
  .box {
    width: 100%;
    height: 290px;
  }
}
.right-top {
  background: $blue;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
  font-size: 21px;
  padding: 15px;
  box-sizing: border-box;
}
.right-bottom {
  li {
    font-size: 20px;
    background: $white;
    list-style: none;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    border-left: 2px solid $gray;
    margin-top: 20px;
    margin-right: 30px;
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
  width: 58%;
  background: red;
  float: left;
}
.body-right {
  width: 35%;
  background: yellow;
  min-height: 340px;
  float: right;
}
</style>