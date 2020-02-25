<template>
     <div>这是概况</div>
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
    parseTime,
  },
  created() {
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