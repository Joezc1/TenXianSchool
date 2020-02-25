<style lang="scss" scoped>
$blue: #409eff;
$white: #f5f5f5;
$gray: #d9d9d9;
.header {
  padding: 10px;
  box-sizing: border-box;
  border: 1px dashed $gray;
  border-radius: 5px;
  span {
    line-height: 40px;
    font-size: 17px;
  }
}
.table{
  margin-top: 20px;
}
</style>

<template>
  <div class="main">
    <div class="header">
      <el-row>
        <el-col :span="1">
          <span>id:</span>
        </el-col>
        <el-col :span="2">
          <el-input v-model="reqData.id" placeholder="请输入id"></el-input>
        </el-col>
        <el-col :offset="2" :span="2">
          <span>标题:</span>
        </el-col>
        <el-col :span="2">
          <el-input v-model="reqData.title" placeholder="请输入标题"></el-input>
        </el-col>
        <el-col :offset="11" :span="4">
          <el-button size="small" type="primary" @click.native.stop="restReqdata" plain>重置</el-button>
          <el-button size="small" type="primary" @click.native.stop="searchReqdata" plain>搜索</el-button>
          <el-button size="small" type="primary" @click.native.stop="newProject" plain>新建</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table class="table" :data="tableData" size="medium" v-loading="loading">
      <el-table-column label="ID" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="250">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否发布" width="100">
        <template slot-scope="scope">
          <el-switch
            disabled
            v-model="scope.row.isshelves"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="100">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createtime,'{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" width="100">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.updatetime,'{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="类型" width="70">
        <template slot-scope="scope">
          <span>{{ switchistype(scope.row.type) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="发布者" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="230">
        <div class="btns" slot-scope="scope">
          <el-button size="small" type="primary" @click="handleDetail(scope.row)">详情</el-button>
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
    <el-dialog
      title="新增话题"
      show-close
      top="20px"
      close-on-press-escape
      @close="closeDialog"
      :visible.sync="dialogVisible"
      width="90%"
      center
    >
      <el-form
        :disabled="disabled"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="团委标题" prop="title">
              <el-input placeholder="请输入团委标题" v-model="ruleForm.title"></el-input>
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
            <el-form-item label="团委类型" prop="type">
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
              <el-switch
                v-model="ruleForm.isshelves"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="团委封面" prop="cover">
              <el-upload
                :disabled="disabled"
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
                :disabled="disabled"
                useCustomImageHandler
                @image-added="handleImageAdded"
                v-model="ruleForm.detail"
              ></vue-editor>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item v-show="!disabled">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import * as upload from "../../api/upload";

import { parseTime } from "../../utils";
import { VueEditor } from "vue2-editor";
import * as myAxios from "../../api/cylmanage";

export default {
  name: "home",
  data() {
    return {
      // loading控制表格加载数据
      loading: false,
      // 表格数据
      tableData: [],
      // 总记录数
      total: 0,
      // 分页变量
      reqData: {
        pageSize: 10,
        pageNo: 1,
        id: "",
        isshelves: false,
        title: "",
        detail: "",
        type: "",
        author: "",
        cover: ""
      },
      // 控制是否是编辑数据
      disabled: false,
      // 弹框显示
      dialogVisible: false,
      // upload默认上传地址
      defaultUrl: "",
      // form表单数据
      ruleForm: {
        id: "",
        isshelves: false,
        title: "",
        detail: "",
        type: "",
        author: "",
        cover: ""
      },
      // formrule
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "change" }],
        detail: [{ required: true, message: "请输入团委", trigger: "change" }],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
        cover: [{ required: true, message: "请上传图片", trigger: "blur" }]
      },
      // 下拉框选择
      options: [
        {
          name: "团委动态",
          value: 1
        },
        {
          name: "团支部生活",
          value: 2
        },
        {
          name: '团员先锋',
          value: 3
        },
        {
          name: '学习园地',
          value: 4
        }
      ]
    };
  },
  methods: {
    // 新建
    newProject() {
      this.$router.push({
        name: "add_cyl"
      });
    },
    // 搜索栏
    searchReqdata() {
      this.getList();
    },
    // 重置搜索表当
    restReqdata() {
      this.reqData = {
        pageSize: 10,
        pageNo: 1,
        id: "",
        isshelves: false,
        title: "",
        detail: "",
        type: "",
        author: "",
        cover: ""
      };
    },
    // 处理时间的js
    parseTime,
    // 分页下标改变
    handleCurrentChange(page) {
      this.reqData.pageNo = page;
      this.getList();
    },
    // 删除信息
    delete(id) {
      let that = this;
      that
        .$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          myAxios.deletecyl(id).then(res => {
            let data = res.data;
            that.getList();
            that.$message.success(data.msg);
          });
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 获取列表数据
    async getList() {
      let that = this;
      this.loading = true;
      await myAxios.list(this.reqData).then(res => {
        let data = res.data;
        that.tableData = data.list;
        that.tableData.forEach((element, index, arr) => {
          arr[index].isshelves = that.switchisshelves(arr[index].isshelves);
        });
        that.total = parseInt(data.pageCount);
        this.loading = false;
      });
    },

    // 修改信息
    async update() {
      let that = this;
      this.ruleForm.isshelves == true ? "true" : "false";
      await myAxios.updatecyl(this.ruleForm, this.ruleForm.id).then(res => {
        let data = res.data;
        if (data.success) {
          that.getList();
          that.$message.success(data.msg);
          that.dialogVisible = false;
        }
      });
    },
    // 获取详情
    async getDetail(id) {
      let that = this;
      await myAxios.detail(id).then(res => {
        that.ruleForm = res.data.data;
        that.ruleForm.createtime = parseTime(that.ruleForm.createtime);
        that.ruleForm.updatetime = parseTime(that.ruleForm.updatetime);
        that.ruleForm.isshelves = that.switchisshelves(that.ruleForm.isshelves);
        console.log("获取成功");
        console.log(that.ruleForm);
      });
    },
    // 格式issheves类型
    switchisshelves(type) {
      switch (type) {
        case "true":
          return true;
        case "false":
          return false;
      }
    },
    // 格式类型
    switchistype(type) {
      switch (parseInt(type)) {
        case 1:
          return "团委动态";
        case 2:
          return "团支部生活";
        case 3:
          return "团员先锋";
        case 4:
          return "学习园地";
      }
    },
    // 获取详情
    handleDetail(obj) {
      this.disabled = true;
      this.dialogVisible = true;
      let that = this;
      that.getDetail(obj.id);
    },
    // 删除
    handleDelete(obj) {
      this.delete(obj.id);
    },
    // 编辑
    handleEdit(obj) {
      this.getDetail(obj.id);
      this.disabled = false;
      this.dialogVisible = true;
    },
    // 关闭弹窗
    closeDialog() {
      this.resetForm("ruleForm");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.update();
        } else {
          console.log("error submit!!");
          return false;
        }
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
  mounted() {
    this.defaultUrl = upload.defaultUrl;
    this.getList();
  },
  components: {
    VueEditor
  }
};
</script>

