### 在vue3中尽量不要使用挂载全局对象, 一般都是按需引入即可 ,
 如果使用了 config.globalProperties 挂载全局 ,
 那么则需要使用 getCurrentInstance 来进行获取 ,
 而如果一定要使用的情况下,那么则建议使用 window 来挂载全局


### 在 vue3 中使用 $refs 获取元素则不能像在vue2中那样子获取,
可以通过 getCurrentInstance 进行获取, 或者可以用过 `const refsName = ref(null)`
进行获取元素, 而元素都会在 refsName.vlaue 中保存
