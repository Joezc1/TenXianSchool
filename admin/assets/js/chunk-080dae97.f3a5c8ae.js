(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-080dae97"],{"0142":function(e,t,r){},"9a52":function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return n})),r.d(t,"a",(function(){return u}));var a=r("b775");function l(e){return Object(a["a"])({url:"/newslist",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/news/".concat(e),method:"post",data:{}})}function s(e){return Object(a["a"])({url:"/save/news",method:"post",data:e})}function n(e,t){return Object(a["a"])({url:"/update/news/".concat(t),method:"post",data:e})}function u(e){return Object(a["a"])({url:"/delete/news/".concat(e),method:"post",data:{}})}},b267:function(e,t,r){"use strict";var a=r("0142"),l=r.n(a);l.a},cb81:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"header clearfix"},[r("div",{staticClass:"title"},[e._v("新闻管理")]),r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.getdetail}},[e._v("查看新闻信息")])],1),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"新闻标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入新闻标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"发布作者",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入发布作者"},model:{value:e.ruleForm.author,callback:function(t){e.$set(e.ruleForm,"author",t)},expression:"ruleForm.author"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"新闻类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否发布",prop:"isshelves"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.isshelves,callback:function(t){e.$set(e.ruleForm,"isshelves",t)},expression:"ruleForm.isshelves"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"新闻封面",prop:"cover"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.defaultUrl,"show-file-list":!1,"on-success":e.handleCoverSuccess,"before-upload":e.beforeUploadCover}},[e.ruleForm.cover?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.cover}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"公告详情",prop:"detail"}},[r("vue-editor",{attrs:{id:"editor",useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.ruleForm.detail,callback:function(t){e.$set(e.ruleForm,"detail",t)},expression:"ruleForm.detail"}})],1)],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},l=[],o=(r("d3b7"),r("96cf"),r("91b6")),s=(r("ed08"),r("5873")),n=r("9a52"),u={name:"home",data:function(){return{defaultUrl:"",ruleForm:{isshelves:!1,title:"",detail:"",type:"",author:"",cover:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"change"}],detail:[{required:!0,message:"请输入新闻",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],cover:[{required:!0,message:"请上传图片",trigger:"blur"}]},options:[{name:"校园快讯",value:1},{name:"领导关怀",value:2},{name:"对外交流",value:3}]}},methods:{getdetail:function(){console.log("2222"),this.$router.push({name:"news_list"})},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.savedetail()}))},isshelvestype:function(e){switch(e){case!0:return 1;case!1:return 0}},savedetail:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,regeneratorRuntime.awrap(n["d"](this.ruleForm).then((function(t){var r=t.data;e.$message.success(r.msg),e.resetForm("ruleForm")})));case 3:case"end":return t.stop()}}),null,this)},resetForm:function(e){this.$refs[e].resetFields()},handleCoverSuccess:function(e,t){console.log(e),console.log(t),this.ruleForm.cover=e.data.url,console.log("上传成功,打印封面地址"),console.log(this.ruleForm.cover)},beforeUploadCover:function(e){var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},handleImageAdded:function(e,t,r,a){var l;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return this,l=new FormData,l.append("file",e),s.next=5,regeneratorRuntime.awrap(o["b"](l).then((function(e){var l=e.data;console.log(l);var o=e.data.url;t.insertEmbed(r,"image",o),a()})));case 5:case"end":return s.stop()}}),null,this)}},created:function(){this.defaultUrl=o["a"]},components:{VueEditor:s["a"]}},i=u,c=(r("b267"),r("2877")),m=Object(c["a"])(i,a,l,!1,null,"753fc199",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-080dae97.f3a5c8ae.js.map