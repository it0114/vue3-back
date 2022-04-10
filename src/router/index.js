import {createRouter, createWebHashHistory} from "vue-router";
/*
* createRouter 路由器
* createWebHashHistory  Hash
* createWebHistory  History
* */

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
            {
                name: 'table',
                path: '/table',
                meta: {
                    title: 'table测试页面'
                },
                component: () => import('../components/table.vue'),
            },
            /*
            * 注意点 :
            * 如果你的 router 和文件的名称的大小写不一致 ,会导致热更新失效 (大小写敏感)
            *
            * */
            {
                name: 'test-code',
                path: '/test-code',
                meta: {
                    title: '代码测试页面'
                },
                component: () => import('../components/TestCode.vue'),
            },
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

