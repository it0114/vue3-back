<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div>
        <div class="logo" v-show="!isCollapse">
          <h1>Manager System</h1>
        </div>
        <el-menu
            active-text-color="#2F7CE5"
            background-color="#282A36"
            class="el-menu-vertical-demo"
            :default-active="activeMenu"
            text-color="#fff"
            @open="handleOpen"
            :collapse="isCollapse"
            @close="handleClose"
            router
        >
          <!-- 递归生成菜单 -->
          <TreeMenu :userMenu="userMenu"></TreeMenu>
        </el-menu>
      </div>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">

          <div class="isCollapse mr-3" @click="handleIsCollapse">
            <e-icon icon-name="el-icon-s-unfold" v-if="isCollapse"/>
            <e-icon icon-name="el-icon-s-fold" v-else/>
          </div>

          <!-- 生成面包屑 -->
          <BreadCrumb></BreadCrumb>
        </div>
        <div class="user-info cursor-pointer">
          <el-badge :is-dot="noticeCount > 0">
            <el-icon class="el-icon">
              <bell/>
            </el-icon>
          </el-badge>
          <el-dropdown trigger="click" @command="handleLogout">
            {{ userInfo.userName }}
            <el-icon class="el-icon--right">
              <arrow-down/>
            </el-icon>
            <span class="el-dropdown-link">
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱 : {{ userInfo.userEmail }}</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TreeMenu from "./TreeMenu.vue";
import BreadCrumb from "./BreadCrumb.vue";
import {
  ArrowRight,
  Bell,
  ArrowDown,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

</script>

<script>
export default {
  name: 'Home',
  data() {
    return {
      userInfo: this.$store.state.userInfo, // 当前用户信息
      noticeCount: 0, // 通知数量
      userMenu: [], // 用户菜单
      // activeMenu: location.hash.slice(1), // 当前激活菜单
      isCollapse: false // 是否折叠菜单
    }
  },
  computed: {
    // 当前激活菜单
    activeMenu() {
      return location.hash.slice(1)
    }
  },
  mounted() {
    this.getNoticeCount()
    this.getMenuList()
    console.log(this.userInfo);
  },
  methods: {
    // 菜单收缩
    handleIsCollapse() {
      this.isCollapse = !this.isCollapse
    },

    // 展开菜单
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },

    // 收起菜单
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },

    // 退出登录
    handleLogout(key) {
      if (key === 'email') return
      this.$store.commit('saveUserInfo', '')
      this.userInfo = ''
      this.$router.push('/login')
    },

    // 获取角标
    async getNoticeCount() {
      try {
        this.noticeCount = await this.$api.getNoticeCount()
      } catch (e) {
        console.log(e)
      }
    },

    // 动态获取菜单
    async getMenuList() {
      try {
        this.userMenu = await this.$api.getMenuList()
        console.log(this.userMenu);
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.basic-layout {
  position: relative;

  .nav-side {
    position: fixed;
    width: v-bind("isCollapse ? '60px' : '200px'");
    height: 100vh;
    background: #282A36;
    overflow-y: auto;
    transition: width 0.3s;
    color: #fff;

    .logo {
      padding: 20px;
      text-align: center;
    }

    .el-menu {
      border-right: 0;
    }
  }

  .content-right {
    margin-left: v-bind("isCollapse ? '60px' : '200px'");
    transition: marginLeft 0.3s;

    .nav-top {
      background: #fff;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      padding: 10px 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;

      .bread {
        display: flex;
        align-items: center;

        .el-icon {
          margin-right: 10px;
        }
      }

      .user-info {
        margin-top: 5px;
        display: flex;

        .el-badge {
          margin-right: 10px;
        }
      }
    }

    .wrapper {
      height: calc(100vh - 50px);
      background: #ECEEF1;
      padding: 20px;
      box-sizing: border-box;

      .main-page {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 4px;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
}

</style>
