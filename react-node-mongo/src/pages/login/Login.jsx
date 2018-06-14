/**
 * Created by 30113 on 2018/6/6.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Redirect}from 'react-router-dom'
import {login} from '../../redux/user.redux'

import valueControl from '../../components/value-control/value-control'
@connect(
    state => state.user,
    {login}
)
@valueControl
class Login extends React.Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.gotoRegister = this.gotoRegister.bind(this)
    }
    handleLogin(){
        this.props.login(this.props.state)
    }
    gotoRegister(){
        this.props.history.push('/register')
    }
    render(){
        return(
            <div >
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                {this.props.msg?<h2>{this.props.msg}</h2>:null}
                <h2>登录页</h2>
                <div>
                    <label>用户名</label>
                    <input type="text"
                           onChange={v => this.props.onChange('user', v.target.value)}
                    />
                </div>
                <div>
                    <label>密码</label>
                    <input type="password"
                           onChange={v => this.props.onChange('pwd', v.target.value)}
                    />
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