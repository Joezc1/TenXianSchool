<template>
  <div class="survey-main">
    <div class="survey-header clearfix">
      <div class="header-title">概况</div>
      <div class="schoolrule">
        <img src="../../assets/img/xiaoxun.png" alt />
      </div>
    </div>
    <div class="survey-body">
      <p>藤县中学创建于1913年，其前身为1902年创办的藤州中学堂，有着悠久的办学历史和优良的办学传统。学校现有校园面积约400亩，59个教学班，教职工270多人，学生4400多人。校园绿树成荫，风景秀丽，各种建筑错落有致，布局合理，是一所体现了人文与自然相结合的学校，是莘莘学子读书求学的好地方。</p>

      <p>藤县中学是广西壮族自治区示范性普通高中,学校师资力量雄厚，设施完善，拥有一流的办学条件。目前，学校拥有4幢教学大楼、2幢实验大楼、1幢学生食堂大楼、1幢综合科教大楼、10幢教师公寓楼、4幢学生公寓楼，1幢图书馆楼等20多幢基础设施楼。全校所有教室全部安装多媒体，各功能室设备齐全。有300米和250米跑道运动场各一个，体育馆一个，以及相关的体育设施。符合示范性高中标准。</p>

      <p>由于教育教学成绩突出，历年来获得了多项殊荣：2003年获“自治区文明庭院”称号；2006年被广西教育厅评为“全区中小学校园文化建设先进学校”和“全区中小学德育工作先进集体”。2009年荣获自治区“卫生优秀学校”称号； 2009年藤县中学团委被团中央授予“全国五四红旗团委”称号；2010年学校被全国教育科学“十一五”规划教育部重点课题组定为“语文实验学校”；2002年被国家基础教育实验中心外语教育研究中心定为“外语实验学校”，并在2010年荣获国家基础教育实验中心外语教育研究中心“全国优秀学校”称号； 2010年学校被中国地质大学定为生源基地学校；荣获2009－2010年度“梧州市优秀学校”称号等。</p>

      <p>近百年的办学历史中，藤中人默默奉献，辛勤耕耘，一代接一代传承发展着“敬业奉献,团结奋进”的藤中精神。形成了“德以立身,学以立业”的校训，“严谨求实,团结进取”的校风，“爱生敬业,善教协和”的教风，“尊师守纪,勤奋善学”的学风。</p>

      <p>“实干就是能力，落实才是水平。”这是藤县中学现任校长范永荣对全校师生提出的要求。在他的带领下，教师爱岗敬业，教育教学教研能力强，业务水平高，富有创新精神，学生勤奋好学，拼搏向上，学校呈现出一派生机勃勃的景象。</p>

      <p>藤县中学以现代化的教学设施，科学的学校管理，务实进取的精神，使学校教学质量逐年稳步提升。在历年的高考中，藤县中学创造了一次又一次的辉煌，曾获得过理工科总分广西第一、数学和化学单科广西第一、数学科平均分广西第一的优异成绩，共有14位同学考上了清华大学和北京大学。近年来，藤县中学高考上线人数一直居于梧州市前列，从2006年开始，连续五年获梧州市高考成绩一等奖。2009年高考共获梧州市九个第一。2010年高考，藤县中学再创历史新高，取得了一本上线303人，二本以上上线1269人的优异成绩。</p>

      <p>百年风雨耕耘，百年春华秋实。与时俱进、开拓进取的藤县中学已成为桂东南乃至全区享有声誉的名校，更多的学子从各地慕名而来这里求学圆梦。如今，她正以崭新的面貌展示她独有魅力与风姿，以高昂的姿态、豪迈的气概、坚定的步伐向着更高更远的目标奋进。藤县中学的未来一定会更加灿烂辉煌。</p>
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
      }
    };
  },
  methods: {
    // 创建websocket
    parseTime
  },
  created() {},
  components: {}
};
</script>

<style lang="scss" scoped>
$green: #6fb5a7;

.survey-main {
}
.survey-header {
  // background: $green;
  width: 100%;
  background: url("../../assets/img/three.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
  padding: 40px;
  p {
    text-indent: 40px;
    letter-spacing: 1px;
    font-size: 15px;
  }
}
</style>