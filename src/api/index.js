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
            mock: true
        })
    },
    // 动态获取菜单
    getMenuList(params) {
        return request({
            method: 'get',
            url: '/menu/list',
            data: {},
            mock: true
        })
    },
    // 获取用户列表
    getUserList(params) {
        return request({
            method: 'get',
            url: '/users/list',
            data: params,
            mock: true
        })
    },
    // 删除单条或者多条数据
    postUserDelete(params) {
        return request({
            method: 'post',
            url: '/users/delete',
            data: params,
            mock: true
        })
    },
}

