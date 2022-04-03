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
