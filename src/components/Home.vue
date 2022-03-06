<template>
  <router-view/>
  <el-button @click="handlerGoLogin">登陆</el-button>
  <el-button @click="handlerGoWelcome">欢迎</el-button>
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

<style scoped>

</style>
