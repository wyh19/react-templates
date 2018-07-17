/**
 * Created by 30113 on 2018/6/13.
 */
import React from 'react'
import {connect} from 'react-redux'

@connect(
    state=>state.user
)
class Home extends React.Component{
    render(){
        return <h2>欢迎{this.props.user}</h2>
    }
}

export default Home