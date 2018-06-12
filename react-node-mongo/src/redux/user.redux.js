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

export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state,isAuth:true,user:action.payload.user,msg:''}
        case ERROR_MSG:
            return {...state,msg:action.msg}
        default:
            return state
    }
}

function authSuccess(obj) {
    return {type: AUTH_SUCCESS, payload: obj}
}

function errorMsg(msg) {
    return {msg, type: ERROR_MSG,}
}

export function register({user, pwd, repwd}) {
    if (!user || !pwd || !repwd) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repwd) {
        return errorMsg('密码和确认密码不同')
    }
    return  authSuccess({user,pwd})
    // return dispatch => {
    //     axios.post('/user/register', {user, pwd})
    //         .then(res => {
    //             if (res.status === 200 && res.data.code === 0) {
    //                 dispatch(authSuccess({user, pwd}))
    //             } else {
    //                 dispatch(errorMsg(res.data.msg))
    //             }
    //         })
    // }
}