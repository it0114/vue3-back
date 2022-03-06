/*
* axios 二次封装
* */

// 引入文件
import axios from "axios"
import config from "../config"
import {ElMessage} from "element-plus"
import router from "../router"

// 无效token
const TOKEN_INVALID = 'Token认证失败, 请重新登陆'
// 请求异常
const NETWORK_ERROR = "网络异常,请稍后重试"

// 全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000,
})

// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers
    if (!headers.Authorization) headers.Authorization = 'Bear Yam'
    return req
})

// 响应拦截
service.interceptors.response.use((res) => {
    const {code, data, msg} = res.data // (res.data 取的是自定义后的数据, 而不是 http 自身的第一层数据)
    if (code === 200) {
        return data // 返回数据正确
    } else if (code === 40001) {
        ElMessage.error(TOKEN_INVALID) // Token 失效
        setTimeout(() => {
            router.push("./login").then(() => Promise.reject(TOKEN_INVALID))
        }, 2000)
    } else {
        ElMessage.error(msg || NETWORK_ERROR) // 常规报错
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

// request 方法
function request(options) {
    service(options)
}

export default request
