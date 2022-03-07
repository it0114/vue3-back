<template>
  <div class="table-div">
    <ul class="table-name-list">
      <li
          v-for="item in columns"
          :key="item.key"
          :style="{
            width:item.width,
            textAlign:item.center
          }">
        {{ item.name }}
      </li>
    </ul>
    <div class="table-body">
      <ul
          class="table-body-list"
          v-for="(item,index) in tableData"
          :key="index">
        <li
            v-for="(value,key,i) in item"
            :key="i"
            :style="{
              width:columns[i].width,
            }">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: '名称 | 运动',
          key: 'name',
          width: '130px',

        },
        {
          name: '游泳',
          key: 'swimming',
          width: '130px',

        },
        {
          name: '自行车',
          key: 'bicycle',
          width: '130px',

        },
        {
          name: '跑步',
          key: 'run',
          width: '130px',
        },
      ],
      data: [
        {name: '运动员甲', sport: '1', time: '12s'},
        {name: '运动员甲', sport: '2', time: '11s'},
        {name: '运动员甲', sport: '3', time: '13s'},

        {name: '运动员乙', sport: '1', time: '14s'},
        {name: '运动员乙', sport: '2', time: '13s'},
        {name: '运动员乙', sport: '3', time: '11s'},

        {name: '运动员丙', sport: '1', time: '17s'},
        {name: '运动员丙', sport: '2', time: '11s'},
        {name: '运动员丙', sport: '3', time: '11s'},

        {name: '运动员丁', sport: '1', time: '10s'},
        {name: '运动员丁', sport: '2', time: '14s'},
        {name: '运动员丁', sport: '3', time: '15s'},
      ],
      newData: []
    }
  },
  computed: {
    tableData() {
      let propsArr = []
      this.newData.forEach((item) => {
        propsArr.push(item.key)
      })
      return this.newData
    },
  },
  mounted() {
    let obj = this.uniqueObj(this.data, 'name')
    this.data.forEach((item, index) => {
      this.newData.push({
        name: obj[index] && obj[index].name,
        swimming: '',
        bicycle: '',
        run: '',
      })
    })
    this.data.forEach(item => {
      this.newData.forEach(item1 => {
        if (item.name === item1.name) {
          if (item.sport === '1') item1.swimming = item.time
          if (item.sport === '2') item1.bicycle = item.time
          if (item.sport === '3') item1.run = item.time
        }
      })
    })

    let tempNewData = []
    this.newData.forEach(item => {
      if (item.name !== undefined) {
        tempNewData.push(item)
      }
    })
    this.newData = tempNewData
  },
  methods: {
    uniqueObj(arr, type) {
      const res = new Map()
      return arr.filter((a) => !res.has(a[type]) && res.set(a[type], 1))
    }
  }
}
</script>

<style scoped lang="scss">
ul, li {
  list-style: none;
}

.table-div {
  .table-name-list {
    display: flex;
    margin: 0;

    li {
      padding: 10px 20px;
      border: 1px solid #333;
      border-right: none;

      &:nth-last-child(1) {
        border-right: 1px solid #333;
      }
    }
  }

  .table-body {
    .table-body-list {
      margin: 0 !important;
      display: flex;

      li {
        position: relative;
        border: 1px solid #333;
        border-right: none;
        border-top: none;
        padding: 10px 20px;

        &:nth-last-child(1) {
          border-right: 1px solid #333;
        }
      }
    }
  }
}
</style>
