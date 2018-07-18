/**
 * Created by 30113 on 2018/3/22.
 */
import React from 'react'
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { getMenuList,openMenu} from '../../redux/menu.redux'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

@withRouter
@connect(
    state=>state.menu,
    {getMenuList,openMenu}
)
class MenuBar extends React.Component {
    componentDidMount(){
        this.props.getMenuList()
    }
    handleClick = (e)=>{
        console.log(e)
    }
    mapMenus(menus){
        return menus.map(v=>{
            if(v.children){
                return (
                    <SubMenu key={v.url?v.url:v.text} title={<span><Icon type={v.icon}/><span>{v.text}</span></span>}>
                        {
                            this.mapMenus(v.children)
                        }
                    </SubMenu>
                )
            }else{
                return (
                    <MenuItem key={v.url}>
                        <Icon type={v.icon}/>
                        <span className="nav-text">{v.text}</span>
                    </MenuItem>
                )
            }
        })
    }
    render() {
        return (
            <Menu theme="dark"
                  mode={this.props.mode}
                  defaultSelectedKeys={['bench']}
                  onClick={this.handleClick}
            >
                {
                    this.mapMenus(this.props.menus)
                }
            </Menu>
        )
    }
}

export default MenuBar