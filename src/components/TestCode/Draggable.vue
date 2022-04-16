<template>
  <div>
    <h1 class="title">拖拽</h1>
    <draggable
        class="wrapper"
        v-model="list"
        @start="drag = true"
        @end="drag = false"
        item-key="index"
    >
      <template #item="{ element }">
        <div class="item">
          <p>{{ element }}</p>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import draggable from 'vuedraggable'

export default {
  name: 'dragAndDrop',
  components: { draggable },
  setup () {
    const state = reactive({
      drag: false,
      list: [1, 2, 3, 4, 5, 6]
    })
    onMounted(() => {})
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  color: #42b983;
}
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  width: 100px;
  height: 100px;
  font-size: 50px;
  text-align: center;
  line-height: 100px;
  margin: 10px;
  background-color: #42b983;
  color: #ffffff;
}
</style>
