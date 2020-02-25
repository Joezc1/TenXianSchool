<template>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="reqData.pageNo"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="reqData.pageCount"
      ></el-pagination>
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
        pageCount: "",
      },
     }
  },
  methods: {
      // 创建websocket
    initWs() {
      this.socket = new WebSocket("ws://localhost:8080/admin/api/ws");
      this.socket.addEventListener("open", function(event) {
        console.log("socket is open");
      });
      this.socket.addEventListener("message",function(event){
         console.log('Message from server', event.data);
      })
    },
    parseTime,
  },
  created() {
    this.initWs()
  },
  components: {
  }
};
</script>

<style lang="scss" scoped>
.el-pagination {
  padding: 20px 0 0 0;
}
</style>