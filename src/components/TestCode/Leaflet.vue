<template>
  <div id="map-container" style="width: 100%;height: 100%;"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css"

/*
* 备忘 :
* 经纬度查询 : https://map.jiqrxx.com/jingweidu/
* 阿里地图 : http://datav.aliyun.com/portal/school/atlas/area_selector
* 地图JSON : https://hxkj.vip/demo/echartsMap/
* 参考文章 : https://blog.csdn.net/summer_du/article/details/114363473
*
* */

const leafletUrl = 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
// import guangdong from "./json/guangdong.json"
import zhongshan from "./json/zhongshan.json"

import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster/dist/leaflet.markercluster.js"

let mapData = {
  map: null,
  mapPoint: null
}

export default {
  name: "Leaflet",
  data() {
    return {}
  },
  mounted() {
    this.initMap()
  },
  methods: {
    // 初始化地图
    initMap() {
      //定义图层样式
      let layer = L.tileLayer(leafletUrl);
      //创建地图
      mapData.map = L.map('map-container', {
        center: [22.51595, 113.3926],//中心坐标
        zoom: 10,//缩放级别
        minZoom: 1, // 最小缩放级别
        maxZoom: 14, // 最大缩放级别
        zoomControl: true, //缩放组件
        attributionControl: false, //去掉右下角 logo
        layers: [layer],//图层
      });
      // 加载地区
      this.addAreaColor()
      // 打点
      this.addMarker()
      // 点聚合
      this.pointAggregation()
    },
    // 加载地区
    addAreaColor() {
      //区域样式 绘制区域颜色
      let style = {
        "color": "#5098E7", //边框颜色
        "weight": 3, //边框粗细
        "opacity": 0.4, //透明度
        "fillColor": 'rgba(167,205,251)', //区域填充颜色
        "fillOpacity": 0.5, //区域填充颜色的透明
      };
      let s = L.geoJSON(zhongshan, {style: style}).addTo(mapData.map);
    },
    // 单个打点
    addMarker() {
      //设置图标样式
      let myIcon = L.icon({
        iconUrl: '/images/point.png',
        iconSize: [30, 30],
      });
      let title = '123'
      let marker = L.marker([22.53893818831508, 113.46224784851074], {
        icon: myIcon,
        title: title
      }).addTo(mapData.map)
      marker.bindPopup(title);
    },
    // 聚合点位
    pointAggregation() {
      // 需要多个点位的经纬度
      let addressPoints = [
        [22.510198055952973, 113.40109348297119],
        [22.521377686857576, 113.40680122375488],
        [22.523359796531473, 113.39002132415771],
        [22.515510475590702, 113.38130950927734],
        [22.532794248737392, 113.4156847000122],
        [22.535806795205925, 113.39723110198975]
      ]
      let markers = L.markerClusterGroup({
        showCoverageOnHover:false, // 鼠标点击的时候是否显示边界
      });
      for (let i = 0; i < addressPoints.length; i++) {
        let a = addressPoints[i];
        let title = '名称'; // 点击之后弹窗的名称
        let marker = L.marker(new L.LatLng(a[0], a[1]), {title: title});
        marker.bindPopup(title);
        markers.addLayer(marker);
      }
      mapData.map.addLayer(markers);
    }
  }
}
</script>

<style scoped>

</style>
