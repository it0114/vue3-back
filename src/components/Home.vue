<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div>
        <div class="logo">
          <h1>Manager System</h1>
        </div>
        <el-menu
            active-text-color="#2F7CE5"
            background-color="#282A36"
            class="el-menu-vertical-demo"
            :default-active="activeMenu"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            router
        >
          <TreeMenu :userMenu="userMenu"></TreeMenu>
        </el-menu>
      </div>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">面包屑</el-breadcrumb-item>
          </el-breadcrumb>
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
// 注意 : useRouter 和 useRoute 不同
import {useRouter} from "vue-router"

import {
  ArrowRight,
  Bell,
  ArrowDown,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const router = useRouter()

const handlerGoLogin = () => {
  router.push('/login')
}
const handlerGoWelcome = () => {
  router.push('/welcome')
}
</script>

<script>
export default {
  name: 'Home',
  data() {
    return {
      userInfo: this.$store.state.userInfo, // 当前用户信息
      noticeCount: 0, // 通知数量
      userMenu: [], // 用户菜单
      activeMenu: location.hash.slice(1), // 当前激活菜单
    }
  },
  mounted() {
    this.getNoticeCount()
    this.getMenuList()
    console.log(this.userInfo);
  },
  methods: {
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
    width: 200px;
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
    margin-left: 200px;

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
