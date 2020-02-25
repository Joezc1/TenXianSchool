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
.item-box{
  float: left;
  width: 224px;
  height: 200px;
  margin-right: 20px;
  // box-shadow: 0 2px 30px rgba(0,0,0,0.1);
  box-sizing: border-box;
  background: #f5f5f5;
  border: 5px solid #ccc;
}
.item-box:hover{
  border: 5px solid $blue;
}
.item-img{
  width: 100%;
  height: 140px;
}
.item-title{
  text-align: center;
  line-height: 40px;
}
</style>

<template>
  <div>
    <!-- 文章布局 -->
    <div class="right-box" v-for="(item,index) in topoptions.list" :key="index">
      <div class="right-box-title clearfix">
        <div class="right-box-title-one">{{item.name}}</div>
        <div class="more-text" @click="gotoMore(item.type)">更多>></div>
      </div>
      <div class="right-box-item clearfix">
        <div class="item-box" v-for="(v,i) in item.list" @click="gotoText(v.id,item.type)" :key="i">
          <img :src="v.cover" class="item-img" alt="">
          <div class="item-title">{{v.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-right",
  data() {
    return {
        
    }
  },
  props: {
    topoptions: {
      type: Object
    }
  },
  methods:{
      gotoMore(type){
          this.$emit('gotoMore',type)
      },
      gotoText(textid,type){
          this.$emit('gotoText',textid,type)
      }
  },
  created(){
      console.log(this.topoptions)
  }
};
</script>