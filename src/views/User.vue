<template>
  <div class="user-manage">
    <div class="query-form">
      <el-form inline :model="user">
        <el-form-item label="用户ID">
          <el-input v-model="user.userId" placeholder="请输入用户ID"></el-input>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="user.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="user.state">
            <el-option :value="0" label="全部"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="base-table">
      <div class="action">
        <el-button type="primary">新增</el-button>
        <el-button type="danger">批量删除</el-button>
      </div>
      <el-table
          :data="userList"
          border
          stripe
          height="250"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55" />
        <el-table-column
            :prop="item.prop"
            :label="item.label"
            :width="item.width ? item.width : 'auto'"
            v-for="(item,index) in columns"
            :key="index"
        />
        <el-table-column
            fixed="right"
            align="center"
            label="操作"
            width="150">
          <template #default>
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const user = ref({
  userId: '123',
  userName: '123',
  state: '123'
})
const columns = ref([
  {
    prop: 'userId',
    label: '用户ID'
  },
  {
    prop: 'userName',
    label: '用户名称'
  },
  {
    prop: 'userEmail',
    label: '用户邮箱',
    width: '200'
  },
  {
    prop: 'role',
    label: '用户角色'
  },
  {
    prop: 'state',
    label: '用户状态'
  },
  {
    prop: 'createTime',
    label: '注册时间'
  },
  {
    prop: 'lastLoginTime',
    label: '最后登录时间'
  },
])
const userList = ref([
  {
    userId: '1',
    userName: '张三',
    userEmail: '1694432338@qq.com',
    role: '前端工程师',
    state: '在职',
    createTime: '2019-09-09',
    lastLoginTime: '2021-09-09',
  },
])
</script>

<style scoped>

</style>
