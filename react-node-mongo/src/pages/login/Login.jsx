/**
 * Created by 30113 on 2018/6/6.
 */
import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.gotoRegister = this.gotoRegister.bind(this)
    }
    handleLogin(){

    }
    gotoRegister(){
        this.props.history.push('/register')
    }
    render(){
        return(
            <div >
                <h2>登录页</h2>
                <div>
                    <label>用户名</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="password"/>
                </div>
                <div>
                    <button onClick={this.handleLogin}>登录</button>
                    <button onClick={this.gotoRegister}>注册</button>
                </div>
            </div>
        )
    }

}

export default Login