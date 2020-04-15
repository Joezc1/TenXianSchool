<template>
  <div>
    <el-menu
      @select="selectIndex"
      default-active="1"
      background-color="#1f72a7"
      text-color="#fff"
      active-text-color="#409EFF"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
      mode="horizontal"
      class="el-menu-demo"
    >
      <!-- <el-submenu v-for="(item,index) in list" :key="index" :index="formatOne(index)">
        <template slot="title">
          <span class="title" slot="title">{{item.adminname}}</span>
        </template>
          <template v-for="(k,i) in item.children">
            <router-link :to="item.path +'/'+k.path" :key="i">
              <el-menu-item
                @click="handleItem(k)"
                :key="i"
                :index="formatIndex(index,i)"
              >{{k.meta.title}}</el-menu-item>
            </router-link>
          </template>
      </el-submenu>-->
      <!-- <router-link v-for="(item,index) in itemList" :to="item.path" :key="index"> -->
      <el-menu-item v-for="(item,index) in itemList" :key="index" :index="item.path">
        <span slot="title">{{item.name}}</span>
        <i class="el-icon-arrow-right"></i>
      </el-menu-item>
      <!-- </router-link> -->
      <!-- <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span slot="title">回答管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">回答列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      labelflag: false,
      isCollapse: false,
      arr: [],
      list: [],
      itemList: [
        {
          name: "首页"
        },
        {
          name: "概况"
        },
        {
          name: "校史"
        },
        {
          name: "新闻"
        },
        {
          name: "团委"
        },
        {
          name: "师资"
        },
        {
          name: "学子"
        },
        {
          name: "高考"
        },
        {
          name: "教研"
        },
        {
          name: "相册"
        },
        {
          name: "图书馆"
        }
      ]
      // iconlist: ['el-icon-edit-outline','el-icon-warning-outline','el-icon-tickets','el-icon-user','el-icon-data-analysis']
    };
  },
  computed: {
    ...mapGetters(["routes", "name", "tags", "menuindex"])
  },
  created() {
    this.getRoutes();
  },
  filters: {
    dealNum(index) {
      return index * 1 + 1;
    }
  },
  methods: {
    ...mapMutations("admin", {
      setTags: "SET_TAGS"
    }),
    handleItem(item) {
      let list = this.tags;
      console.log("打印list");
      let obj = list.find(e => {
        return e.name === item.name;
      });
      if (obj) {
        console.log("有了");
        return false;
      } else {
        console.log("没有");
        list.push(item);
      }
      console.log(this.tags);

      localStorage.setItem("tags", JSON.stringify(list));
    },
    // 获取routes对象
    getRoutes() {
      for (let i = 0; i < this.routes.length; i++) {
        if (this.routes[i].hidden) {
        } else {
          this.arr.push(this.routes[i]);
        }
      }

      for (let j = 0; j < this.arr.length; j++) {
        // this.arr[j].icon = this.iconlist[j]
        for (let k = 0; k < this.arr[j].children.length; k++) {
          if (this.arr[j].children[k].hidden) {
            this.arr[j].children.splice(k, 1);
            k--;
          }
        }

        this.list.push(this.arr[j]);
        // item.path +'/'+k.path
        this.list.forEach((element, index, arr) => {
          this.itemList[index].path =
            element.path + "/" + element.children[0].path;
        });
      }
      // 将routes存取到状态管理器
      this.$store.state.routes = this.list;
      console.log("打印routes对象");
      console.log(this.$store.state.routes);
    },
    formatIndex(ione, itwo) {
      let a = ione * 1 + 1;
      let b = itwo * 1 + 1;
      return `${a}-${b}`;
    },
    formatOne(a) {
      let str = a * 1 + 1;
      return `${str}`;
    },
    changeType(type) {
      this.labelflag = type;
      console.log(this.labelflag);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectIndex(e) {
      console.log("选中函数");
      console.log(e);
      sessionStorage.menuindex = e;
    }
  }
};
</script>

<style lang="scss">
.title {
  font-size: 18px;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>