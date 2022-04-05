/*
* 环境配置封装
* */
const env = import.meta.env.MODE || 'prod'
//     MODE: "development"
const EnvConfig = {
    dev: { // 开发环境
        baseApi: '/api',
        mockApi: 'https:/www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    },
    test: { // 测试环境
        baseApi: '/',
        mockApi: 'https:/www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    },
    prod: { // 线上环境
        baseApi: '/',
        mockApi: ''
    }
}


export default {
    env,
    namespace: 'manager',
    mock: false, // 是否启动全局 mock
    ...EnvConfig[env]
}
