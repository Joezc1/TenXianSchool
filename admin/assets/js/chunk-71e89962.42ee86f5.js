(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e89962"],{"4d09":function(e,t,a){},"4fe8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topic-main"},[a("div",{staticClass:"topic-header"},[a("searchBtns",{attrs:{reqData:e.reqData,inputBtns:e.inputBtns,options:e.options,pickerOptions:e.pickerOptions,selectedBtns:e.selectedBtns,newBtn:!1,hiddencase:!1},on:{handleChange:e.handleChange,findProject:e.findProject,restProject:e.restProject}})],1),a("div",{staticClass:"topic-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,size:"medium"}},[a("el-table-column",{attrs:{label:"ID",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),a("el-table-column",{attrs:{label:"发布人ID",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.userid))])]}}])}),a("el-table-column",{attrs:{label:"标题",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.title))])]}}])}),a("el-table-column",{attrs:{label:"热度",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.heat))])]}}])}),a("el-table-column",{attrs:{label:"赞同数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agree))])]}}])}),a("el-table-column",{attrs:{label:"评论数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.comment))])]}}])}),a("el-table-column",{attrs:{label:"关注数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.follow))])]}}])}),a("el-table-column",{attrs:{label:"浏览量",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.brower))])]}}])}),a("el-table-column",{attrs:{label:"创建时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createtime)))])]}}])}),a("el-table-column",{attrs:{label:"修改时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.updatetime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",fixed:"right",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return a("div",{staticClass:"btns"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.handleDetail(t.$index,t.row)}}},[e._v("详情")]),a("el-button",{attrs:{size:"small"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])],1)}}])})],1),a("el-dialog",{attrs:{title:"新增话题","show-close":"",top:"20px","close-on-press-escape":"",visible:e.dialogVisible,width:"80%",center:""},on:{close:e.closeDialog,"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{disabled:e.disabled,model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"话题标题",prop:"title"}},[a("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"话题作者",prop:"userid"}},[a("el-input",{model:{value:e.ruleForm.userid,callback:function(t){e.$set(e.ruleForm,"userid",t)},expression:"ruleForm.userid"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"关注数",prop:"follow"}},[a("el-input",{model:{value:e.ruleForm.follow,callback:function(t){e.$set(e.ruleForm,"follow",t)},expression:"ruleForm.follow"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"浏览量",prop:"brower"}},[a("el-input",{model:{value:e.ruleForm.brower,callback:function(t){e.$set(e.ruleForm,"brower",t)},expression:"ruleForm.brower"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"评论数",prop:"comment"}},[a("el-input",{model:{value:e.ruleForm.comment,callback:function(t){e.$set(e.ruleForm,"comment",t)},expression:"ruleForm.comment"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"赞同数",prop:"agree"}},[a("el-input",{model:{value:e.ruleForm.agree,callback:function(t){e.$set(e.ruleForm,"agree",t)},expression:"ruleForm.agree"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"话题热度",prop:"heat"}},[a("el-input",{model:{value:e.ruleForm.heat,callback:function(t){e.$set(e.ruleForm,"heat",t)},expression:"ruleForm.heat"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"话题封面",prop:"topiccover"}},[a("el-input",{model:{value:e.ruleForm.topiccover,callback:function(t){e.$set(e.ruleForm,"topiccover",t)},expression:"ruleForm.topiccover"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"话题摘要",prop:"abstract"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.abstract,callback:function(t){e.$set(e.ruleForm,"abstract",t)},expression:"ruleForm.abstract"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"话题详情",prop:"topic"}},[a("vue-editor",{attrs:{id:"editor",useCustomImageHandler:"",disabled:e.disabled},on:{"image-added":e.handleImageAdded},model:{value:e.ruleForm.topic,callback:function(t){e.$set(e.ruleForm,"topic",t)},expression:"ruleForm.topic"}})],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleUpdate("ruleForm")}}},[e._v("保存")]),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1),a("el-pagination",{attrs:{"current-page":e.reqData.pageNo,"page-sizes":[10,20,30,40],"page-size":100,layout:"sizes, prev, pager, next",total:e.reqData.pageCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.reqData,"pageNo",t)},"update:current-page":function(t){return e.$set(e.reqData,"pageNo",t)}}})],1)])},n=[],o=(a("d3b7"),a("e25e"),a("96cf"),a("ed08")),l=a("7457"),i=a("b775");function s(e){return Object(i["a"])({url:"/topiclist",data:e,method:"POST"})}function u(e,t){return Object(i["a"])({url:"/topic/".concat(t),data:e,method:"post"})}function c(e,t){return Object(i["a"])({url:"/delete/topic/".concat(t),data:e,method:"post"})}function d(e,t){return Object(i["a"])({url:"/update/topic/".concat(t),data:e,method:"post"})}var m=function(){return a.e("chunk-372f0d5a").then(a.bind(null,"a060"))},p={name:"home",data:function(){return{topicid:"",disabled:!1,dialogVisible:!1,loading:!1,options:[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]}],pickerOptions:{hidden:!1,shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},ruleForm:{id:"",title:"",abstract:"",userid:"",comment:"",follow:"",agree:"",heat:"",brower:"",topic:"",topiccover:""},rules:{title:[{required:!0,message:"请输入话题标题",trigger:"blur"}],abstract:[{required:!0,message:"请输入话题简介",trigger:"blur"}],topic:[{required:!0,message:"请输入话题详情",trigger:"blur"}],topiccover:[{required:!0,message:"请上传话题封面",trigger:"blur"}],userid:[{required:!0,message:"请输入用户",trigger:"blur"}],comment:[{required:!0,message:"请输入评论数",trigger:"blur"}],follow:[{required:!0,message:"请输入关注数",trigger:"blur"}],agree:[{required:!0,message:"请输入赞同数",trigger:"blur"}],heat:[{required:!0,message:"请输入热度",trigger:"blur"}],brower:[{required:!0,message:"请输入公告详情",trigger:"blur"}]},reqData:{id:"",title:"",abstract:"",pageNo:1,pageSize:10,pageCount:"",userid:"",createtime:"",tag:"",comment:"",follow:"",agree:"",heat:"",count:"",brower:""},inputBtns:[{name:"用户ID",value:"userid",hidden:!1},{name:"ID",value:"topicid",hidden:!1},{name:"话题摘要",value:"abstract",hidden:!1},{name:"评论数",value:"comment",hidden:!1},{name:"赞同数",value:"agree",hidden:!1},{name:"浏览量",value:"brower",hidden:!1},{name:"热度",value:"heat",hidden:!1},{name:"关注数",value:"follow",hidden:!1}],selectedBtns:[{name:"标签",value:"tag",hidden:!0,data:[{id:0,name:"科技"},{id:1,name:"IT技术"},{id:2,name:"美食"}]}],tableData:[]}},methods:{initWs:function(){this.socket=new WebSocket("ws://localhost:8080/admin/api/ws"),this.socket.addEventListener("open",(function(e){console.log("socket is open")})),this.socket.addEventListener("message",(function(e){console.log("Message from server",e.data)}))},parseTime:o["a"],submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1}))},handleUpdate:function(e){var t=this,a=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;a.updateTopic(t.topicid)}))},resetForm:function(e){this.$refs[e].resetFields()},closeDialog:function(){console.log("调用打印"),this.clearReqdata("ruleForm")},findProject:function(){console.log("打印reqdata"),console.log(this.reqData),this.getTopics()},clearReqdata:function(e){this.reqData.id="",this.reqData.title="",this.reqData.abstract="",this.reqData.userid="",this.reqData.createtime="",this.reqData.tag="",this.reqData.comment="",this.reqData.follow="",this.reqData.agree="",this.reqData.heat="",this.reqData.count="",this.reqData.brower="",this.disabled=!1,this.$refs[e].clearValidate()},restProject:function(){this.clearReqdata("ruleForm")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},handleChange:function(e){console.log("打印子组件传递的"),console.log(e)},topicDetail:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=this,a.next=3,regeneratorRuntime.awrap(u({id:e},e).then((function(e){console.log(e),t.ruleForm=e.data.data,console.log(t.ruleForm)})));case 3:case"end":return a.stop()}}),null,this)},updateTopic:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=this,a.next=3,regeneratorRuntime.awrap(d(this.ruleForm,e).then((function(e){console.log(e),e.data.success&&(t.$message({message:e.data.msg,type:"success"}),t.clearReqdata("ruleForm"),t.disabled=!1,t.getTopics(),t.dialogVisible=!1)})));case 3:case"end":return a.stop()}}),null,this)},deleteTopic:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t={},t.id=e,a.next=4,regeneratorRuntime.awrap(c(t,e).then((function(e){console.log(e)})));case 4:case"end":return a.stop()}}))},getTopics:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,this.loading=!0,t.next=4,regeneratorRuntime.awrap(s(this.reqData).then((function(t){console.log(t),e.tableData=t.data,e.reqData.pageCount=parseInt(t.pageCount),e.loading=!1})).catch((function(){e.loading=!1})));case 4:case"end":return t.stop()}}),null,this)},handleDetail:function(e,t){this.disabled=!0,this.topicDetail(t.id),this.dialogVisible=!0},handleEdit:function(e,t){this.topicid=t.id,this.disabled=!1,this.dialogVisible=!0,this.topicDetail(t.id)},handleDelete:function(e,t){var a=this;console.log(e,t);var r=this;console.log("删除"),this.ruleForm={},this.$confirm("此操作将删除该公告, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){r.deleteTopic(t.id)})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},handleImageAdded:function(e,t,a,r){var n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return this,n=new FormData,n.append("file",e),o.next=5,regeneratorRuntime.awrap(myaxios.upload(n).then((function(e){var n=e.data;console.log(n);var o=e.data.url;t.insertEmbed(a,"image",o),r()})));case 5:case"end":return o.stop()}}),null,this)}},created:function(){this.initWs(),this.getTopics()},components:{searchBtns:m,VueEditor:l["a"]}},h=p,g=(a("6386"),a("2877")),f=Object(g["a"])(h,r,n,!1,null,"4cde3c78",null);t["default"]=f.exports},6386:function(e,t,a){"use strict";var r=a("4d09"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-71e89962.42ee86f5.js.map