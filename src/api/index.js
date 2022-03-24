/*
* api 统一管理
* */
import request from "../utils/request";
export default {
    login(params) {
        console.log(params);
        return request({
            method: 'post',
            url: '/users/login',
            data: params,
            // mock: true
        })
    }
}

