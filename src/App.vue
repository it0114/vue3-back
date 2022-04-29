<template>
  <router-view/>
</template>

<script setup>
import {onMounted} from "vue";
import {setWaterMark} from "./utils/watermark";

onMounted(() => {
  setWaterMark('', 'yam') // 添加全局水印
})
</script>

<style>

</style>
