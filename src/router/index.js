import {createRouter, createWebHashHistory} from "vue-router";
/*
* createRouter 路由器
* createWebHashHistory  Hash
* createWebHistory  History
* */

// 测试代码的路由
const testCodeRouter = [
    {
        name: 'table',
        path: '/table',
        meta: {
            title: 'table测试页面'
        },
        component: () => import('../components/TestCode/Table.vue'),
    },
    {
        name: 'format-data',
        path: '/format-data',
        meta: {
            title: '格式化数据'
        },
        component: () => import('../components/TestCode/FormatData.vue'),
    },
    {
        name: 'progress-bar',
        path: '/progress-bar',
        meta: {
            title: 'echarts 进度条'
        },
        component: () => import('../components/TestCode/ProgressBar.vue'),
    },
    {
        name: 'leaflet',
        path: '/leaflet',
        meta: {
            title: 'leaflet 地图'
        },
        component: () => import('../components/TestCode/Leaflet.vue'),
    },
]

// 页面路由
const routes = [
    {
        name: 'home',
        path: '/',
        redirect: '/welcome', // 必须使用 path 或者 name
        meta: {
            title: '首页'
        },
        component: () => import('../components/Home.vue'),
        children: [
            /*
          * 注意点 :
          * 如果你的 router 和文件的名称的大小写不一致 ,会导致热更新失效 (大小写敏感)
          *
          * */
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
                component: () => import('../views/Welcome.vue'),
            },
            {
                name: 'user',
                path: '/user',
                meta: {
                    title: '用户管理'
                },
                component: () => import('../views/User.vue'),
            },
            ...testCodeRouter
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登陆页'
        },
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/:catchAll(.*)',  // 导出必须使用 catchAll 正则匹配
        name: '/404',
        component: () => import('../components/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),  // 选择模式
    routes
})

export default router

