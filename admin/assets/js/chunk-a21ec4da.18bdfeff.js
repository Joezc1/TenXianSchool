(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a21ec4da"],{"159b":function(e,t,a){var r=a("da84"),l=a("fdbc"),s=a("17c2"),n=a("9112");for(var o in l){var i=r[o],c=i&&i.prototype;if(c&&c.forEach!==s)try{n(c,"forEach",s)}catch(u){c.forEach=s}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,l=a("b301");e.exports=l("forEach")?function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},"5a39":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return n})),a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return i}));var r=a("b775");function l(e){return Object(r["a"])({url:"/librarylist",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/library/".concat(e),method:"post",data:{}})}function n(e){return Object(r["a"])({url:"/save/library",method:"post",data:e})}function o(e,t){return Object(r["a"])({url:"/update/library/".concat(t),method:"post",data:e})}function i(e){return Object(r["a"])({url:"/delete/library/".concat(e),method:"post",data:{}})}},b9c6:function(e,t,a){},bc25:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"header"},[a("el-row",[a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.getList}})],1),a("el-col",{attrs:{span:1}},[a("span",[e._v("id:")])]),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{placeholder:"请输入id"},model:{value:e.reqData.id,callback:function(t){e.$set(e.reqData,"id",t)},expression:"reqData.id"}})],1),a("el-col",{attrs:{offset:2,span:2}},[a("span",[e._v("标题:")])]),a("el-col",{attrs:{span:2}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:e.reqData.title,callback:function(t){e.$set(e.reqData,"title",t)},expression:"reqData.title"}})],1),a("el-col",{attrs:{offset:9,span:4}},[a("el-button",{attrs:{size:"small",type:"primary",plain:""},nativeOn:{click:function(t){return t.stopPropagation(),e.restReqdata(t)}}},[e._v("重置")]),a("el-button",{attrs:{size:"small",type:"primary",plain:""},nativeOn:{click:function(t){return t.stopPropagation(),e.searchReqdata(t)}}},[e._v("搜索")]),a("el-button",{attrs:{size:"small",type:"primary",plain:""},nativeOn:{click:function(t){return t.stopPropagation(),e.newProject(t)}}},[e._v("新建")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{data:e.tableData,size:"medium"}},[a("el-table-column",{attrs:{label:"ID",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),a("el-table-column",{attrs:{label:"标题",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"是否发布",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{disabled:"","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.row.isshelves,callback:function(a){e.$set(t.row,"isshelves",a)},expression:"scope.row.isshelves"}})]}}])}),a("el-table-column",{attrs:{label:"创建时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createtime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"修改时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.updatetime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"类型",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.switchistype(t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"发布者",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.author))])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"btns"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleDetail(t.row)}}},[e._v("详情")]),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])],1)}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"新增话题","show-close":"",top:"20px","close-on-press-escape":"",visible:e.dialogVisible,width:"90%",center:""},on:{close:e.closeDialog,"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{disabled:e.disabled,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图书馆标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入图书馆标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"发布作者",prop:"author"}},[a("el-input",{attrs:{placeholder:"请输入发布作者"},model:{value:e.ruleForm.author,callback:function(t){e.$set(e.ruleForm,"author",t)},expression:"ruleForm.author"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图书馆类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"是否发布",prop:"isshelves"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.isshelves,callback:function(t){e.$set(e.ruleForm,"isshelves",t)},expression:"ruleForm.isshelves"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"图书馆封面",prop:"cover"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{disabled:e.disabled,action:e.defaultUrl,"show-file-list":!1,"on-success":e.handleCoverSuccess,"before-upload":e.beforeUploadCover}},[e.ruleForm.cover?a("img",{staticClass:"avatar",attrs:{src:e.ruleForm.cover}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"公告详情",prop:"detail"}},[a("vue-editor",{attrs:{id:"editor",disabled:e.disabled,useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.ruleForm.detail,callback:function(t){e.$set(e.ruleForm,"detail",t)},expression:"ruleForm.detail"}})],1)],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.disabled,expression:"!disabled"}]},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("保存")]),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},l=[],s=(a("d3b7"),a("e25e"),a("159b"),a("96cf"),a("91b6")),n=a("ed08"),o=a("5873"),i=a("5a39"),c={name:"home",data:function(){return{loading:!1,tableData:[],total:0,reqData:{pageSize:10,pageNo:1,id:"",isshelves:!1,title:"",detail:"",type:"",author:"",cover:""},disabled:!1,dialogVisible:!1,defaultUrl:"",ruleForm:{id:"",isshelves:!1,title:"",detail:"",type:"",author:"",cover:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"change"}],detail:[{required:!0,message:"请输入图书馆",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],author:[{required:!0,message:"请输入作者",trigger:"blur"}],cover:[{required:!0,message:"请上传图片",trigger:"blur"}]},options:[{name:"通知公告",value:1},{name:"阅读活动",value:2}]}},methods:{newProject:function(){this.$router.push({name:"add_library"})},searchReqdata:function(){this.getList()},restReqdata:function(){this.reqData={pageSize:10,pageNo:1,id:"",isshelves:!1,title:"",detail:"",type:"",author:"",cover:""}},parseTime:n["a"],handleCurrentChange:function(e){this.reqData.pageNo=e,this.getList()},delete:function(e){var t=this;t.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"](e).then((function(e){var a=e.data;t.getList(),t.$message.success(a.msg)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getList:function(){var e,t=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return e=this,this.loading=!0,a.next=4,regeneratorRuntime.awrap(i["c"](this.reqData).then((function(a){var r=a.data;e.tableData=r.list,e.tableData.forEach((function(t,a,r){r[a].isshelves=e.switchisshelves(r[a].isshelves)})),e.total=parseInt(r.pageCount),t.loading=!1})));case 4:case"end":return a.stop()}}),null,this)},update:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,this.ruleForm.isshelves,t.next=4,regeneratorRuntime.awrap(i["e"](this.ruleForm,this.ruleForm.id).then((function(t){var a=t.data;a.success&&(e.getList(),e.$message.success(a.msg),e.dialogVisible=!1)})));case 4:case"end":return t.stop()}}),null,this)},getDetail:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=this,a.next=3,regeneratorRuntime.awrap(i["b"](e).then((function(e){t.ruleForm=e.data.data,t.ruleForm.createtime=Object(n["a"])(t.ruleForm.createtime),t.ruleForm.updatetime=Object(n["a"])(t.ruleForm.updatetime),t.ruleForm.isshelves=t.switchisshelves(t.ruleForm.isshelves),console.log("获取成功"),console.log(t.ruleForm)})));case 3:case"end":return a.stop()}}),null,this)},switchisshelves:function(e){switch(e){case"true":return!0;case"false":return!1}},switchistype:function(e){switch(parseInt(e)){case 1:return"通知公告";case 2:return"阅读活动"}},handleDetail:function(e){this.disabled=!0,this.dialogVisible=!0;var t=this;t.getDetail(e.id)},handleDelete:function(e){this.delete(e.id)},handleEdit:function(e){this.getDetail(e.id),this.disabled=!1,this.dialogVisible=!0},closeDialog:function(){this.resetForm("ruleForm")},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.update()}))},resetForm:function(e){this.$refs[e].resetFields()},handleCoverSuccess:function(e,t){console.log(e),console.log(t),this.ruleForm.cover=e.data.url,console.log("上传成功,打印封面地址"),console.log(this.ruleForm.cover)},beforeUploadCover:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleImageAdded:function(e,t,a,r){var l;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return this,l=new FormData,l.append("file",e),n.next=5,regeneratorRuntime.awrap(s["b"](l).then((function(e){var l=e.data;console.log(l);var s=e.data.url;t.insertEmbed(a,"image",s),r()})));case 5:case"end":return n.stop()}}),null,this)}},mounted:function(){this.defaultUrl=s["a"],this.getList()},components:{VueEditor:o["a"]}},u=c,d=(a("ea6a"),a("2877")),p=Object(d["a"])(u,r,l,!1,null,"2e69ca7c",null);t["default"]=p.exports},ea6a:function(e,t,a){"use strict";var r=a("b9c6"),l=a.n(r);l.a}}]);
//# sourceMappingURL=chunk-a21ec4da.18bdfeff.js.map