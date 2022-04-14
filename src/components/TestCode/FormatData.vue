<template>
  <div v-for="(item,index) in formatList" :key="index">
    <p>姓名 : {{ item.name }}</p>
    <p>年龄 : {{ item.age }}</p>
    <p>状态 : {{ item.formatState }}</p>
    <div class="bg-red" :style="styleVar"></div>
  </div>
</template>

<script>

export default {
  name: "TestCode",
  data() {
    return {
      list: [
        {
          name: '张三',
          age: 18,
          state: 1
        },
        {
          name: '李四',
          age: 18,
          state: 2
        },
        {
          name: '王五',
          age: 18,
          state: 3
        },
      ]
    }
  },

  /*
  * 1 : 学习中
  * 2 : 休息中
  * 3 : 工作中
  * */

  computed: {
    styleVar() {
      return {
        '--red': 'red',
        '--height':'50px'
      }
    },
    formatList() {
      // 1. 用 if 方式
      // this.list.forEach(item=>{
      //   if(item.state === 1){
      //     item.formatState = '学习中'
      //   }else if (item.state === 2){
      //     item.formatState = '休息中'
      //   }else {
      //     item.formatState = '工作中'
      //   }
      // })
      // return this.list

      // 2. 用 switch 方式
      // this.list.forEach(item => {
      //   switch (item.state) {
      //     case 1 :
      //       item.formatState = '学习中'
      //       break
      //     case 2 :
      //       item.formatState = '休息中'
      //       break
      //     case 3 :
      //       item.formatState = '工作中'
      //       break
      //   }
      // })
      // return this.list

      // 3. 三元表达式
      // let temp = []
      // this.list.forEach(item => {
      //   temp.push({
      //     ...item,
      //     formatState: item.state === 1 ? '学习中' : item.state === 2 ? '休息中' : '工作中'
      //   })
      // })
      // return temp

      // 4. 字典的方式
      let temp = []
      let obj = {
        1: '学习中',
        2: '休息中',
        3: '工作中',
      }
      this.list.forEach(item => {
        temp.push({
          ...item,
          formatState: obj[item.state]
        })
      })
      return temp
    }
  }

}
</script>

<style scoped>
.bg-red {
  background: var(--red);
  height: var(--height);
}
</style>
