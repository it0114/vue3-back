/*
* 环境配置封装
* */
const env = import.meta.env.MODE || 'prod'
//     MODE: "development"
const EnvConfig = {
    dev: { // 开发环境
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/d2c509582fd0149189cf261a4469d262/api'
    },
    test: { // 测试环境
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/d2c509582fd0149189cf261a4469d262/api'
    },
    prod: { // 线上环境
        baseApi: '/',
        mockApi: ''
    }
}


export default {
    env,
    namespace:'manager',
    mock:false, // 是否启动全局 mock
    ...EnvConfig[env]
}
