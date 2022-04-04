<!--
思路 :

  1. 在路由中定义 meta 原数据
  2. 用 this.$route.matched 进行数组
  3. 循环遍历 matched 数组获取 meta.title 即可

-->

<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item
        v-for="(item, index) in breadCrumbList"
        :key="item.path"
    >
      <router-link :to="{ path: item.path }" v-if="index === 0">
        {{ item.meta.title }}
      </router-link>
      <span v-else>
      {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      title: '面包屑'
    }
  },
  mounted() {
    console.log(this.$route.matched);
  },
  computed: {
    // 计算路由matched属性的meta中的title
    breadCrumbList() {
      return this.$route.matched
    }
  }
}
</script>

<style scoped>

</style>
