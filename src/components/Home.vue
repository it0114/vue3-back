<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div>导航</div>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user-info">admin</div>
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

// 注意 : useRouter 和 useRoute 不同
import {useRouter} from "vue-router"

const router = useRouter()

const handlerGoLogin = () => {
  router.push('/login')
}
const handlerGoWelcome = () => {
  router.push('/welcome')

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
