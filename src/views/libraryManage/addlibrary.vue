<template>
  <div class="main">
    <div class="header clearfix">
      <div class="title">图书馆管理</div>
      <el-button @click="getdetail" type="primary" size="small" plain>查看图书馆信息</el-button>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="图书馆标题" prop="title">
            <el-input placeholder="请输入图书馆标题" v-model="ruleForm.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发布作者" prop="author">
            <el-input placeholder="请输入发布作者" v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="图书馆类型" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否发布" prop="isshelves">
            <el-switch v-model="ruleForm.isshelves" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="图书馆封面" prop="cover">
            <el-upload
              class="avatar-uploader"
              :action="defaultUrl"
              :show-file-list="false"
              :on-success="handleCoverSuccess"
              :before-upload="beforeUploadCover"
            >
              <img v-if="ruleForm.cover" :src="ruleForm.cover" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="公告详情" prop="detail">
            <vue-editor
              id="editor"
              useCustomImageHandler
              @image-added="handleImageAdded"
              v-model="ruleForm.detail"
            ></vue-editor>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as upload from "../../api/upload";
import { parseTime } from "../../utils";
import { VueEditor } from "vue2-editor";

import * as myAxios from "../../api/librarymanage";
export default {
  name: "home",
  data() {
    return {
      // 图片上传地址
      defaultUrl: "",
      ruleForm: {
        isshelves: false,
        title: "",
        detail: "",
        type: "",
        author: "",
        cover: ""
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "change" }],
        detail: [{ required: true, message: "请输入图书馆", trigger: "change" }],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        cover: [{ required: true, message: "请上传图片", trigger: "blur" }]
      },
      options: [
        {
          name: "通知公告",
          value: 1
        },
        {
          name: "阅读活动",
          value: 2
        }
      ]
    };
  },
  methods: {
       // 查看详细信息
    getdetail(){
      this.$router.push({
        name: 'library_list'
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.savedetail();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //
    isshelvestype(type) {
      switch (type) {
        case true:
          return 1;
        case false:
          return 0;
      }
    },
    // 新建一个detail
    async savedetail() {
      let that = this;
      await myAxios.newlibrary(this.ruleForm).then(res => {
        let data = res.data;
        that.$message.success(data.msg);
        // 创建成功，重置表单
        that.resetForm("ruleForm");
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 上传图片封面
    handleCoverSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.ruleForm.cover = res.data.url;
      // this.ruleForm.video = URL.createObjectURL(file.raw);
      console.log("上传成功,打印封面地址");
      console.log(this.ruleForm.cover);
    },
    // 上传图片之前
    beforeUploadCover(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
      // if (!isLt10M) {
      //   this.$message.error("上传视频大小不能超过10MB哦!");
      //   return false;
      // }
    },
    // 插入图片处理
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      let that = this;
      var formData = new FormData();
      formData.append("file", file);

      await upload.upload(formData).then(res => {
        const data = res.data;
        console.log(data);
        let url = res.data.url; // Get url from response
        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      });
    }
  },
  created() {
    this.defaultUrl = upload.defaultUrl;
  },
  components: {
    VueEditor
  }
};
</script>

<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #d9d9d9;
.main {
  padding: 20px;
  box-sizing: border-box;
  .header {
    padding: 10px;
    font-size: 17px;
    box-sizing: border-box;
    border: 1px dashed $gray;
    border-radius: 5px;
    .title {
      float: left;
      line-height: 33px;
    }
    button {
      float: right;
    }
  }
}
.title {
  font-size: 17px;
}
.demo-ruleForm {
  margin-top: 20px;
}
</style>