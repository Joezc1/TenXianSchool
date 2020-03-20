<template>
  <div class="main">
    <div class="header clearfix">
      <div class="title">角色管理</div>
      <el-button @click="getdetail" type="primary" size="small" plain>查看角色信息</el-button>
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
          <el-form-item label="角色账号" prop="username">
            <el-input placeholder="请输入角色账号" v-model="ruleForm.username"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="角色密码" prop="password">
            <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="Email" prop="email">
            <el-input placeholder="请输入邮箱" v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Tel" prop="tel">
            <el-input placeholder="请输入手机号码" v-model="ruleForm.tel"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="角色类型" prop="level">
            <el-select v-model="ruleForm.level" placeholder="请选择角色类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </el-select>
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

import * as myAxios from "../../api/rolemanage";
export default {
  name: "home",
  data() {
    return {
      // 图片上传地址
      defaultUrl: "",
      ruleForm: {
        username: "",
        password: "",
        tel: "",
        email: "",
        level: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入管理员账号", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字母和数字",
            trigger: "blur"
          }
        ],
        tel: [{ required: true, message: "请选择电话号码", trigger: "change" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "change" }],
        level: [{ required: true, message: "请选择用户类型", trigger: "change" }]
      },
      options: [
        {
          name: "普通管理员",
          value: 1
        },
        {
          name: "超级管理员",
          value: 2
        }
      ]
    };
  },
  methods: {
    // 查看详细信息
    getdetail() {
      this.$router.push({
        name: "student_list"
      });
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
      await myAxios.newrole(this.ruleForm).then(res => {
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