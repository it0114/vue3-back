import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

const path = require('path')

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') // 别名
        }
    },
    server: {
        host: 'localhost', // 启动时使用的路径 localhost
        port: '8080', // 指定端口号
        open: '/', // 启动打开页面
        proxy: {
            '/api': {
                target: 'http://localhost:3000'
            }
        }
    },
    plugins: [
        vue({
            refTransform: true,
            reactivityTransform: true
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
})
