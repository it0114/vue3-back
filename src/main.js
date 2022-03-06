import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App);

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 查看环境变量
console.log('环境变量 ==> ', import.meta.env);
// import.meta.env = {  // 返回值
//     BASE_URL: "/"
//     DEV: true
//     MODE: "development"
//     PROD: false
//     SSR: false
// }

//app.use( 组件 )这个必须在mount('#app')前面，不然会导致可能无法渲染
app
    .use(ElementPlus)
    .use(router)
    .mount('#app')

