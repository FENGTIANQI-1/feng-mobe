<template>
  <div id="nav-bar">
    <div class="fold-icon-wrap" @click="toggleMenuCollapse">
      <i class="el-icon-s-unfold" v-if="!isCollapse"></i>
      <i class="el-icon-s-fold" v-if="isCollapse"></i>
    </div>

    <bread-crumb
      @hideAvatar="isAvatar = false"
      @showAvatar="isAvatar = true"
    ></bread-crumb>

    <div class="dropdown-wrap" v-if="isAvatar">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar
            shape="square"
            size="medium"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic%2Fc4%2F9f%2F09%2Fc49f090757360f843141fe2bab2cfc8f_1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637141044&t=aa3d9d7790f337184d9c4f621f74ce42"
          ></el-avatar>
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="dashboard">首页</el-dropdown-item>
          <el-dropdown-item :divided="true" command="logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
export default {
  props: ["mobile"],
  name: "NavBar",
  data() {
    return {
      isAvatar: true, // 控制头像的显示
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
  methods: {
    // 侧边栏折叠切换
    toggleMenuCollapse() {
      // 如果当前屏幕宽度 < 768(参考 bootstrap 移动设备)
      if (this.mobile) {
        this.$store.dispatch("toggleCollapse", false);
        this.$emit("openMenu");
        return;
      }
      this.$store.dispatch("toggleCollapse", !this.isCollapse);
    },
    // 点击菜单项触发事件
    handleCommand(command) {
      command === "logout" ? this.logout() : this.$router.push("/home");
    },
    // 退出登录
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  components: {
    BreadCrumb,
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl';

#nav-bar {
  height: 50px;

  .fold-icon-wrap {
    float: left;

    i[class^='el-icon'] {
      width: 20px;
      height: 20px;
      font-size: $font-sm;
      cursor: pointer;
    }
  }

  .dropdown-wrap {
    float: right;
    height: 50px;
    cursor: pointer;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      height: 50px;

      i[class^='el-icon'] {
        position: relative;
        top: 8px;
      }
    }

    .el-avatar--square {
      border-radius: 10px;
      margin-right: 10px;
    }
  }
}
</style>