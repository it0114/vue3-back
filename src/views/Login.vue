<template>
  <p>登陆</p>
</template>


<script>
export default {
  name: 'login',
  mounted() {
    // this.$request({
    //   methods: 'get',
    //   url: '/login'
    // })
    //     .then((res) => {
    //       console.log(res);
    //     })

    // this.$request.get('/login',{name:'zhangsan'},'get').then(res=>{
    //   console.log(res);
    // })

    this.$storage.setItem('info','tom1')


  }
}


</script>

<style scoped>

</style>
