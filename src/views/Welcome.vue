<template>
  <div class="welcome">
    <div class="content">
      <div class="left">
        <div class="sub-title">欢迎使用</div>
        <div class="title">Vue3 通用后台管理系统</div>
        <div class="desc">Vue3.x + ElementPlus + Kao2 + Mongodb</div>
      </div>
      <div class="right">
      </div>
    </div>
  </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.welcome {
  height: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 80px;

    .left {
      flex: 1;
      .sub-title{
        font-size: 24px;
        color: #333;
      }
      .title{
        font-size: 42px;
        color: #64B2F7;
        font-weight: 600;
      }
      .desc{
        font-size: 16px;
        color: #666;
      }

    }

    .right {
      width: 500px;
      height:300px;
      background: url("../assets/images/welcome.png") no-repeat 100% 100%;
      background-size: cover;
    }
  }
}
</style>
