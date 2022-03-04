import {createApp} from 'vue'
import App from './App.vue'

// 查看环境变量
console.log('环境变量 ==> ', import.meta.env);
// import.meta.env = {  // 返回值
//     BASE_URL: "/"
//     DEV: true
//     MODE: "development"
//     PROD: false
//     SSR: false
// }


createApp(App).mount('#app')
