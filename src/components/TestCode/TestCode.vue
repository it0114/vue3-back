<template>
  <div ref="echartsBox" class="echartsBox"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: "TestCode",
  data() {
    return {}
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      // echarts
      let myChart = echarts.init(this.$refs.echartsBox);
      let data = [70, 34, 60, 78, 69]
      let titleName = ['测试1', '测试2', '测试3', '测试4', '测试5'];
      let valData = [683, 234, 234, 523, 345]
      let myColor = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
      let options = {
        backgroundColor: '#282A36',
        xAxis: {
          show: false
        },
        yAxis: [
          // 左边的文字
          {
            show: true,
            data: titleName,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              formatter: function (value, index) {
                return [
                  '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                ].join('\n')
              },
              // 左边的文字
              rich: {
                lg: {
                  backgroundColor: '#42A5F5',
                  color: '#fff',
                  borderRadius: 20,
                  // padding: 5,
                  align: 'center',
                  width: 20,
                  height: 20,
                },
              }
            },
          },
          // 右边的文字
          {
            show: true,
            inverse: true,
            data: valData,
            axisLabel: {
              color: '#fff',
              fontSize: 20,
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
          }],
        series: [
          {
            name: '外边框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 40,
            itemStyle: {
              color: 'none',
              borderColor: '#00c1de',
              borderWidth: 3, // 边框线粗细
              borderRadius: 40,
            }
          },
          {
            name: '进度条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 40,
            emphasis: {
              itemStyle: {
                color: '#fff'
              }
            },
            // 内环圆角
            itemStyle: {
              // 定义圆角
              borderRadius: 40,
              // 定义颜色
              color: function (params) {
                const num = myColor.length;
                return myColor[params.dataIndex % num]
              },
            },
            // 百分比
            label: {
              show: true,
              position: 'inside',
              formatter: '{c}%'
            },
          },
        ]
      }
      myChart.setOption(options);
    }
  }

}
</script>

<style scoped>
.echartsBox {
  width: 100%;
  height: 100%;
}
</style>
