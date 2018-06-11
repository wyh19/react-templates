/**
 * Created by 30113 on 2018/6/11.
 */
import axios from 'axios'

const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'

const initState = {
    redirectTo: '',
    msg: '',
    isAuth: false,
    user: '',
    pwd: ''
}

export function user(state=initState,action){
    switch(action.type){

        default:
            return state
    }
}

function authSuccess(obj){
    return {type:AUTH_SUCCESS,payload:obj}
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG,}
}

export function register({user,pwd,repwd}){
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('密码和确认密码不同')
    }
}