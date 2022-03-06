import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host:'127.0.0.1', // 启动时使用的路径 localhost
        port: '3000', // 指定端口号
        open:'/', // 启动打开页面
    },
    plugins: [vue()],
})
