<template>
  <div class="user-manage">
    <div class="query-form">
      <el-form inline :model="user" ref="ruleFormRef">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="user.userId" placeholder="请输入用户ID"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="user.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-select v-model="user.state">
            <el-option :value="0" label="全部"></el-option>
            <el-option :value="1" label="在职"></el-option>
            <el-option :value="2" label="离职"></el-option>
            <el-option :value="3" label="试用期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQuery">查询</el-button>
          <el-button @click="handleReset">重置</el-button>
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
          height="500"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            align="center"
            width="55"/>
        <el-table-column
            :prop="item.prop"
            :label="item.label"
            :width="item.width ? item.width : 'auto'"
            v-for="(item,index) in columns"
            :key="index"
            :align="item.align"
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
            :page-size="pager.pageSize"
            layout="total, prev, pager, next"
            :total="pager.total"
            @current-change="handleCurrentPageChange"
        />
        <!--:page-count="pager.total"-->
        <!--v-model:page-size="pager.pageSize"-->
        <!--@size-change="handlePageSizeChange"-->
        <!--v-model:current-page="pager.pageNum"-->
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, getCurrentInstance} from 'vue'
import dayjs from "dayjs";

const user = ref({
  userId: '',
  userName: '',
  state: 0
})
const columns = ref([
  {
    prop: 'userId',
    label: '用户ID',
    align: 'center'
  },
  {
    prop: 'userName',
    label: '用户名称',
    align: 'center'
  },
  {
    prop: 'userEmail',
    label: '用户邮箱',
    width: '200'
  },
  {
    prop: 'role',
    label: '用户角色',
    align: 'center'
  },
  {
    prop: 'state',
    label: '用户状态',
    align: 'center'
  },
  {
    prop: 'createTime',
    label: '注册时间',
    width: '170',
  },
  {
    prop: 'lastLoginTime',
    label: '最后登录时间',
    width: '170',
  },
])
const userList = ref([])
const pager = ref({
  pageNum: 1, // 当前页码
  pageSize: 10, // 每页条数
  total: 20   // 总条数 (动态传入)
})

// 其中包含了 main.js 里面的 config.globalProperties
// const {proxy} = getCurrentInstance()
// prod(生产环境下) 模式下, 不会有 config.globalProperties
// const {ctx} = getCurrentInstance()
// console.log(getCurrentInstance());

onMounted(async () => {
  await getUserList()
})

const handleCurrentPageChange = (val) => {
  console.log(val);
  pager.value.pageNum = val
  getUserList()
}

// const handlePageSizeChange = () => {
//   console.log(456); // 更改所需的页码
// }

// 获取用户列表数据
const getUserList = async () => {
  // 传参
  let params = {...user.value,...pager.value}
  console.log(params);
  try {
    // let {list, page} = await proxy.$api.getUserList()
    let {list, page} = await $api.getUserList(params) // 对应的 $api 会自动找 window 对象
    list = list.map(item => {
      return {
        ...item,
        createTime: dayjs(item.createTime).format('YYYY-MM-DD HH:mm'),
        lastLoginTime: dayjs(item.lastLoginTime).format('YYYY-MM-DD HH:mm')
      }
    })
    console.log(list);
    console.log(page);
    userList.value = list
    pager.value.total = page.total
    // pager.value.pageNum = page.pageNum

  } catch (e) {
    console.log(e);
  }
}

// 处理 select 选中
const handleSelectionChange = () => {
  //todo
}

// 查询 , 获取用户列表
const handleQuery = () => {
  //todo
  console.log('查询');
  getUserList()
}

// ref 可以获取标签中的 ref , 但是必须要在外层定义, 而不能在方法中定义
const ruleFormRef = ref(null)
// 重置 , 重置查询条件
const handleReset = () => {
  ruleFormRef && ruleFormRef.value.resetFields()
}


</script>

<style scoped>

</style>
