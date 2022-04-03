/*
* api 统一管理
* */
import request from "../utils/request";
export default {
    // 登陆接口
    postLogin(params) {
        return request({
            method: 'post',
            url: '/users/login',
            data: params,
            // mock: true
        })
    },
    // 获取徽标数量
    getNoticeCount(params) {
        return request({
            method: 'get',
            url: '/leave/count',
            data: {},
            // mock: true
        })
    },
    // 动态获取菜单
    getMenuList(params) {
        return request({
            method: 'get',
            url: '/menu/list',
            data: {},
            // mock: true
        })
    },
}

