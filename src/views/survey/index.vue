<template>
  <div class="survey-main">
    <div class="survey-header clearfix">
      <div class="header-title">概况</div>
      <div class="schoolrule">
        <img src="../../assets/img/xiaoxun.png" alt />
      </div>
      <div class="bottom-box">
        <div
          :class="{'bottom-box-item':true,'selected':item.type==type?true:false}"
          @click="changeType(item.type)"
          v-for="(item,index) in typelist"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="survey-body">
      <div v-show="type==1" class="survey-text">
        <p>藤县中学创建于1913年，其前身为1902年创办的藤州中学堂，有着悠久的办学历史和优良的办学传统。学校现有校园面积约400亩，59个教学班，教职工270多人，学生4400多人。校园绿树成荫，风景秀丽，各种建筑错落有致，布局合理，是一所体现了人文与自然相结合的学校，是莘莘学子读书求学的好地方。</p>

        <p>藤县中学是广西壮族自治区示范性普通高中,学校师资力量雄厚，设施完善，拥有一流的办学条件。目前，学校拥有4幢教学大楼、2幢实验大楼、1幢学生食堂大楼、1幢综合科教大楼、10幢教师公寓楼、4幢学生公寓楼，1幢图书馆楼等20多幢基础设施楼。全校所有教室全部安装多媒体，各功能室设备齐全。有300米和250米跑道运动场各一个，体育馆一个，以及相关的体育设施。符合示范性高中标准。</p>

        <p>由于教育教学成绩突出，历年来获得了多项殊荣：2003年获“自治区文明庭院”称号；2006年被广西教育厅评为“全区中小学校园文化建设先进学校”和“全区中小学德育工作先进集体”。2009年荣获自治区“卫生优秀学校”称号； 2009年藤县中学团委被团中央授予“全国五四红旗团委”称号；2010年学校被全国教育科学“十一五”规划教育部重点课题组定为“语文实验学校”；2002年被国家基础教育实验中心外语教育研究中心定为“外语实验学校”，并在2010年荣获国家基础教育实验中心外语教育研究中心“全国优秀学校”称号； 2010年学校被中国地质大学定为生源基地学校；荣获2009－2010年度“梧州市优秀学校”称号等。</p>

        <p>近百年的办学历史中，藤中人默默奉献，辛勤耕耘，一代接一代传承发展着“敬业奉献,团结奋进”的藤中精神。形成了“德以立身,学以立业”的校训，“严谨求实,团结进取”的校风，“爱生敬业,善教协和”的教风，“尊师守纪,勤奋善学”的学风。</p>

        <p>“实干就是能力，落实才是水平。”这是藤县中学现任校长范永荣对全校师生提出的要求。在他的带领下，教师爱岗敬业，教育教学教研能力强，业务水平高，富有创新精神，学生勤奋好学，拼搏向上，学校呈现出一派生机勃勃的景象。</p>

        <p>藤县中学以现代化的教学设施，科学的学校管理，务实进取的精神，使学校教学质量逐年稳步提升。在历年的高考中，藤县中学创造了一次又一次的辉煌，曾获得过理工科总分广西第一、数学和化学单科广西第一、数学科平均分广西第一的优异成绩，共有14位同学考上了清华大学和北京大学。近年来，藤县中学高考上线人数一直居于梧州市前列，从2006年开始，连续五年获梧州市高考成绩一等奖。2009年高考共获梧州市九个第一。2010年高考，藤县中学再创历史新高，取得了一本上线303人，二本以上上线1269人的优异成绩。</p>

        <p>百年风雨耕耘，百年春华秋实。与时俱进、开拓进取的藤县中学已成为桂东南乃至全区享有声誉的名校，更多的学子从各地慕名而来这里求学圆梦。如今，她正以崭新的面貌展示她独有魅力与风姿，以高昂的姿态、豪迈的气概、坚定的步伐向着更高更远的目标奋进。藤县中学的未来一定会更加灿烂辉煌。</p>
      </div>
      <div v-show="type==2" class="survey-text">
        <div class="school-song clearfix" style=" border-top: 1px solid #00000040;">
          <div class="title">校徽</div>
          <div class="school-img">
            <img src="../../assets/img/eebc5e23490ca94eee116c50acd86a4.png" alt />
          </div>
          <div class="text">
            <p>
              校徽是仿照北京大学的校徽，“北大”两个篆字上下排列，其中“北字”构成背对背的两个侧立的人像 ，而“大字”构成了一个正面站立的人像，而“大字”构成了一个正面站立的人像。校徽突出一个办学理念，即大学要“以人为本”。同时，中学，每个学子都会怀着考上北大而在努力的奋斗。也有人说，上面的是学生，下面的是老师，教师就是要甘为人梯；学生站在巨人的肩膀上，就是要青出于蓝胜于蓝。
              “北大”的另一番意义是作为一名藤县第一中学的教师甘为人梯，为藤县第一中学的学子默默奉献的形象。教师如水一般，润物无声，默默奉献。同时标注年份，体现学校悠久的办学历史以及深厚的办学积淀。
              标志设计整体颜色为大红色，标志着学子的学习如红色那般灼热，为梦想而努力学习。藤县第一中学给学子们最宝贵的是“拼搏，奋斗”的精神。
            </p>
          </div>
        </div>
        <div class="school-song clearfix">
          <div class="title">校训</div>
          <div class="text">
            校训：以德治校，以人为本，多元化发展
            简称：县一中
            原名：藤城中学
            创办时间：1978年8月
            现任校长：陈文
            主要奖项：高考成绩优秀学校
          </div>
        </div>
      </div>
      <div v-show="type==3" class="survey-text">
        <div class="teacherlist" v-for="(item,index) in teacherList" :key="index">
          <div class="box"></div>
          <img src="../../assets/img/trophy_icon.png" alt />
          <!-- <img class="box-img" src="../../assets/img/trophy_icon.png" /> -->
          <div class="top">
            <div class="name">{{item.name}}</div>
            <div class="job">{{item.job}}</div>
          </div>
          <div class="bottom">{{item.class}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseTime } from "../../utils";
// @ is an alias to /src
import * as myAxios from "@/api/topicmanage";
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
      //       校长 陈文 中学高级教师
      // 副校长 黄宇胜 中学高级教师
      // 副校长 吴华龙 中学高级教师
      // 副校长 孙勇其 中学高级教师
      // 副校长 莫武文 中学高级教师
      // 党委副书记 容传章中学高级教师
      // 党委副书记 黎福安中学高级教师
      teacherList: [
        {
          name: "陈文",
          job: "校长",
          class: "中学高级教师"
        },
        {
          name: "黄宇胜",
          job: "副校长",
          class: "中学高级教师"
        },
        {
          name: "吴华龙",
          job: "副校长",
          class: "中学高级教师"
        },
        {
          name: "孙勇其",
          job: "副校长",
          class: "中学高级教师"
        },
        {
          name: "莫武文",
          job: "副校长",
          class: "中学高级教师"
        },
        {
          name: "容传章",
          job: "党委副书记",
          class: "中学高级教师"
        },
        {
          name: "黎福安",
          job: "党委副书记",
          class: "中学高级教师"
        }
      ],
      type: 1,
      typelist: [
        {
          name: "学校简介",
          type: 1
        },
        {
          name: "学校校徽",
          type: 2
        },
        {
          name: "学校领导",
          type: 3
        }
      ]
    };
  },
  methods: {
    // 创建websocket
    parseTime,
    // 改变类型
    changeType(e) {
      this.type = e;
    }
  },
  created() {},
  components: {}
};
</script>

<style lang="scss" scoped>
$green: #6fb5a7;
$blue: #2681c3;

.survey-main {
}
.survey-header {
  // background: $green;
  width: 100%;
  position: relative;
  background: url("../../assets/img/three.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  .bottom-box {
    position: absolute;
    bottom: 0;
    text-align: center;
    display: flex;
    left: 30%;
    .bottom-box-item {
      text-align: center;
      font-size: 18px;
      height: 40px;
      background: #00000070;
      line-height: 39px;
      color: #ffffff;
      width: 140px;
      margin-left: 10px;
    }
    .bottom-box-item:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      background: $blue;
    }
  }

  .schoolrule {
    float: right;
    padding: 0 20px 20px 0;
    box-sizing: border-box;
    margin-top: 50px;
    box-sizing: border-box;
  }
  .header-title {
    float: left;
    width: 160px;
    height: 40px;
    background: #00000060;
    color: #ffffff;
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
  }
}
.el-pagination {
  padding: 20px 0 0 0;
}
.survey-body {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  p {
    text-indent: 40px;
    letter-spacing: 1px;
    font-size: 15px;
  }
  min-height: 500px;
  .survey-text {
    width: 100%;
    .school-song {
      padding: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #00000040;
      width: 100%;
      .title {
        width: 100%;
        margin-bottom: 20px;
      }
      .school-img {
        float: left;
        padding: 20px;
        box-sizing: border-box;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }
    .teacherlist {
      width: 100%;
      margin: 10px;
      box-sizing: border-box;
      background: #2681c360;
      padding: 20px;
      position: relative;
      overflow: hidden;
      .box {
        width: 150px;
        height: 150px;
        position: absolute;
        background: red;
        transform: rotate(45deg);
        left: -7%;
        top: -55%;
        opacity: 0.1;
      }
      .top {
        width: 100%;
        display: flex;
        .name {
          font-size: 36px;
          margin-left: 20px;
        }
        .job {
          font-size: 24px;
          line-height: 41px;
          margin-left: 30px;
        }
      }
      .bottom {
        width: 100%;
      }
    }
  }
}
</style>