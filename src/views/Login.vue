<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="userData" :rules="rules">
        <div class="title">Vue3 后台管理系统</div>
        <el-form-item prop="userName">
          <span>账号 : </span>
          <el-input
              type="text"
              :prefix-icon="User"
              clearable
              v-model='userData.userName'
              placeholder="请输入账号"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <span>密码 : </span>
          <el-input
              type="password"
              show-password
              clearable
              :prefix-icon="Tickets"
              v-model="userData.userPwd"
              placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button
              type="primary"
              class="w-full"
              @click="handlerLogin">
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script setup>
import {User, Tickets} from '@element-plus/icons-vue'
</script>

<script>
export default {
  name: 'login',
  data() {
    return {
      userData: {
        userName: '',
        userPwd: '',
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        userPwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {
    handlerLogin() {
      // 1. 校验
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          let res = await this.$api.login(this.userData)
          // console.log(res);
          this.$store.commit('saveUserInfo', res)
          await this.$router.push("/welcome")
        }
      })
    }
  }

}
</script>

<style scoped lang="scss">
.login-wrapper {
  width: 100vw;
  height: 100vh;
  background: url("src/assets/images/login-bg.jpg") no-repeat 100%;
  position: relative;

  .modal {
    width: 400px;
    border-radius: 4px;
    //border: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.1);
    color: #ffffff;

    .title {
      width: 100%;
      text-align: center;
      font-size: 20px;
    }

    ::v-deep .el-input__inner {
      background: transparent !important;
      color: #fff;
    }
  }
}

</style>
