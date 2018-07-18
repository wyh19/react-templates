import React from 'react'
import {connect} from 'react-redux'

@connect(
    state=>state.menu
)
class OpenedMenuBar extends React.Component{
    render(){
        return (
            <div>openedmenubar</div>
        )
    }
}

export default OpenedMenuBar