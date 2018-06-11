/**
 * Created by 30113 on 2018/6/6.
 */
import React from 'react'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.reset = this.reset.bind(this)
    }
    handleRegister(){

    }
    reset(){

    }
    render(){
        return(
            <div >
                <h2>注册页</h2>
                <div>
                    <label>用户名</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>密码</label>
                    <input type="password"/>
                </div>
                <div>
                    <label>确认密码</label>
                    <input type="password"/>
                </div>
                <div>
                    <button onClick={this.handleRegister}>注册</button>
                    <button onClick={this.reset}>重置</button>
                </div>
            </div>
        )
    }
}

export default Register