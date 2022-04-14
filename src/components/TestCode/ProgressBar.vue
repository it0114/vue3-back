<template>
  <div ref="echartsBox" class="echartsBox"></div>
</template>

<script>
import * as echarts from 'echarts'

/*
* 备忘 :
* 样例地址 : https://www.makeapie.cn/echarts
* */

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
      let data = [100, 34, 60, 78, 69]  // 百分比
      let valData = [683, 234, 234, 523, 345]  // 进度条
      let titleName = ['测试1', '测试2', '测试3', '测试4', '测试5'];  // 名称
      let colorList = [  // 颜色值
        ['#00feff', '#0286ff'],
        ['#ee6666', '#0076FF'],
        ['#A69CEF', '#6C19DA'],
        ['#73FFB2', '#00B92A'],
      ]
      let textColor = "#666"  // 文字颜色
      let bgColor = '#e7e5e5' // 进度条背景颜色

      // let dataOption = [
      //   {name: '测试1', colors: ['#00feff', '#0286ff'], percentage: 100, value: 192}
      // ]


      let maxArr = (new Array(valData.length)).fill(100);
      let options = {
        // backgroundColor: '#282A36',
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
            // 左边的文字
            axisLabel: {
              color: textColor,
              fontSize: 16,
              formatter: function (value, index) {
                return [
                  '{lg|' + (index + 1) + '}' + '　' + '{title|' + value + '} '
                ].join('\n')
              },
              rich: {
                // 最左边的小圆圈
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
              color: textColor,
              fontSize: 16,
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
          }
        ],
        series: [
          {
            name: '外边框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: maxArr,
            barWidth: 30,
            //鼠标悬停时：
            emphasis: {
              itemStyle: {
                color: bgColor,
              }
            },
            itemStyle: {
              color: bgColor,
              // borderColor: 'rgba(255,255,255,0.3)',
              // borderWidth: 2, // 边框线粗细
              borderRadius: 30,
            },
            zlevel:5
          },
          {
            name: '进度条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 30,
            emphasis: {
              itemStyle: {
                color: 'none'
              }
            },
            // 内环圆角
            itemStyle: {
              // 定义圆角
              borderRadius: 30,
              // 定义颜色
              // color: function (params) {
              //   console.log(params);
              //   const num = myColor.length;
              //   return myColor[params.dataIndex % num]
              // },
              //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                let index = params.dataIndex;
                if (params.dataIndex >= colorList.length) {
                  index = params.dataIndex - colorList.length;
                }
                return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                    [
                      {offset: 0, color: colorList[index][0]},
                      {offset: 1, color: colorList[index][1]}
                    ]);
              }
            },
            zlevel:6,
            // 百分比
            label: {
              show: true,
              position: 'top',
              formatter: '{c}%'
            },
          },
        ]
      }
      // 自动缩放
      window.addEventListener('resize', () => {
        myChart.resize();
      })
      myChart.setOption(options);
    }
  }

}
</script>

<style scoped>
.echartsBox {
  width: 1000px;
  height: 500px;
}
</style>
