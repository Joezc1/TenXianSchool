(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f687ee6c"],{"111c":function(s,t,a){s.exports=a.p+"assets/img/avtar.75607836.png"},"457c":function(s,t,a){"use strict";var n=a("f422"),o=a.n(n);o.a},ec65:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"navbar-main clearfix"},[n("div",{staticClass:"CollapseBox",on:{click:s.isColl}},[s.isCollapse?n("i",{staticClass:"el-icon-s-unfold"}):n("i",{staticClass:"el-icon-s-fold"})]),n("div",{staticClass:"navbar-left"},[s._v("藤县中学官网后台管理系统")]),n("div",{staticClass:"navbar-right"},[n("el-dropdown",{on:{command:s.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{attrs:{src:a("111c")}}),n("span",{staticStyle:{color:"#000000"}},[s._v(s._s(s.username))])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"c",icon:"el-icon-circle-plus-outline"}},[s._v("退出")])],1)],1)],1)])},o=[],e={name:"navbar",data:function(){return{isCollapse:!1,username:""}},methods:{isColl:function(){this.isCollapse=!this.isCollapse,this.$emit("isCollapse",this.isCollapse)},handleCommand:function(s){console.log(s),"c"==s&&(this.$store.commit("FedLogOut"),this.$router.push("/"))}},created:function(){this.username=localStorage.getItem("username")}},i=e,l=(a("457c"),a("2877")),c=Object(l["a"])(i,n,o,!1,null,"7baafb4f",null);t["default"]=c.exports},f422:function(s,t,a){}}]);
//# sourceMappingURL=chunk-f687ee6c.37cc64a4.js.map