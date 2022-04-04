
<!--
多级菜单渲染

思路 :

1. 获取到传过来的 userMenu 数据
2. 使用 el-sub-menu 进行遍历, 判断他是否有 children , 如果有的情况并且 menuType 的值 === 1 , name则生成一个菜单组
3. 在进行一个递归判断是否有多级的 children , 有的话继续生成下一级的菜单
4. 判断到了最后一个层级, 所需要的肯定是一个可点击的按钮, 而不是一个组, 所以则需要用 el-menu-item 来进行渲染

-->

<template>
  <template v-for="menu in userMenu">
    <el-sub-menu
        v-if="menu.children && menu.children.length > 0 && menu.children[0].menuType.toString() === '1'"
        :key="menu._id"
        :index="menu.path"
    >
      <template #title>
        <e-icon :icon-name="menu.icon" v-if="menu.icon" class="mr-1"/>
        <span>{{ menu.menuName }}</span>
      </template>
      <TreeMenu :userMenu="menu.children"></TreeMenu>
    </el-sub-menu>
    <el-menu-item
        v-else-if="menu.menuType.toString() === '1'"
        :index="menu.path"
        :key="menu._id">
      {{ menu.menuName }}
    </el-menu-item>
  </template>
</template>


<script setup>
</script>

<script>
export default {
  name: "TreeMenu",
  props: {
    userMenu: {
      type: Array,
      default() {
        return [];
      }
    },
  }
}
</script>

<style scoped>

</style>
