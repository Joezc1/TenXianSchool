(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05130bb4"],{"044b":function(e,t,r){"use strict";var a=r("f220"),o=r.n(a);o.a},"3e34":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("div",{staticClass:"header clearfix"},[r("div",{staticClass:"title"},[e._v("高考管理")]),r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.getdetail}},[e._v("查看高考信息")])],1),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"高考标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入高考标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"发布作者",prop:"author"}},[r("el-input",{attrs:{placeholder:"请输入发布作者"},model:{value:e.ruleForm.author,callback:function(t){e.$set(e.ruleForm,"author",t)},expression:"ruleForm.author"}})],1)],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"高考类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否发布",prop:"isshelves"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.isshelves,callback:function(t){e.$set(e.ruleForm,"isshelves",t)},expression:"ruleForm.isshelves"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"高考封面",prop:"cover"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.defaultUrl,"show-file-list":!1,"on-success":e.handleCoverSuccess,"before-upload":e.beforeUploadCover}},[e.ruleForm.cover?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.cover}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"公告详情",prop:"detail"}},[r("vue-editor",{attrs:{id:"editor",useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.ruleForm.detail,callback:function(t){e.$set(e.ruleForm,"detail",t)},expression:"ruleForm.detail"}})],1)],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],l=(r("d3b7"),r("96cf"),r("91b6")),n=(r("ed08"),r("5873")),s=r("e49e"),i={name:"home",data:function(){return{defaultUrl:"",ruleForm:{isshelves:!1,title:"",detail:"",type:"",author:"",cover:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"change"}],detail:[{required:!0,message:"请输入高考",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],cover:[{required:!0,message:"请上传图片",trigger:"blur"}]},options:[{name:"辉煌高考",value:1},{name:"高考动态",value:2},{name:"政策指南",value:3},{name:"高考公示",value:4}]}},methods:{getdetail:function(){this.$router.push({name:"examination_list"})},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.savedetail()}))},isshelvestype:function(e){switch(e){case!0:return 1;case!1:return 0}},savedetail:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,regeneratorRuntime.awrap(s["d"](this.ruleForm).then((function(t){var r=t.data;e.$message.success(r.msg),e.resetForm("ruleForm")})));case 3:case"end":return t.stop()}}),null,this)},resetForm:function(e){this.$refs[e].resetFields()},handleCoverSuccess:function(e,t){console.log(e),console.log(t),this.ruleForm.cover=e.data.url,console.log("上传成功,打印封面地址"),console.log(this.ruleForm.cover)},beforeUploadCover:function(e){var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},handleImageAdded:function(e,t,r,a){var o;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this,o=new FormData,o.append("file",e),n.next=5,regeneratorRuntime.awrap(l["b"](o).then((function(e){var o=e.data;console.log(o);var l=e.data.url;t.insertEmbed(r,"image",l),a()})));case 5:case"end":return n.stop()}}),null,this)}},created:function(){this.defaultUrl=l["a"]},components:{VueEditor:n["a"]}},u=i,c=(r("044b"),r("2877")),m=Object(c["a"])(u,a,o,!1,null,"1bfc40fe",null);t["default"]=m.exports},e49e:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return i}));var a=r("b775");function o(e){return Object(a["a"])({url:"/examinationlist",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/examination/".concat(e),method:"post",data:{}})}function n(e){return Object(a["a"])({url:"/save/examination",method:"post",data:e})}function s(e,t){return Object(a["a"])({url:"/update/examination/".concat(t),method:"post",data:e})}function i(e){return Object(a["a"])({url:"/delete/examination/".concat(e),method:"post",data:{}})}},f220:function(e,t,r){}}]);
//# sourceMappingURL=chunk-05130bb4.ea565e20.js.map