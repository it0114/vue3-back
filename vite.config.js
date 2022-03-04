import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: '3000', // 指定端口号
        open:'/index.html', // 启动打开页面
        host:'127.0.0.1' // 启动时使用的路径 localhost
    },
    plugins: [vue()],
})
