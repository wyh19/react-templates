/**
 * Created by 30113 on 2018/6/6.
 */
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {menu} from './redux/menu.redux'

export default combineReducers({user,menu})