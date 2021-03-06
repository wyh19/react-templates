/**
 * Created by 30113 on 2018/3/22.
 */
import axios from 'axios'

const MENU_LIST = 'MENU_LIST'
const OPEN_MENU = 'OPEN_MENU'

const initState = {
    menus: [],
    openedMenus: []
}

export function menu(state = initState, action) {
    switch (action.type) {
        case MENU_LIST:
            return { ...state,
                menus: action.payload
            }
        case OPEN_MENU:
            state.openedMenus.push(action.payload)
            return { ...state
            }
        default:
            return state
    }
}

function menuList(data) {
    return {
        type: MENU_LIST,
        payload: data
    }
}


export function getMenuList() {
    const menus = [{
            icon: 'laptop',
            text: '工作台',
            url: 'bench'
        },
        {
            icon: 'car',
            text: 'JSON',
            children: [{
                text: '编辑器',
                url: 'jsoneditor'
            }]
        },
        {
            icon: 'coffee',
            text: 'Demo',
            children: [{
                    text: '表格',
                    url: 'table'
                },
                {
                    text: '树',
                    url: 'tree'
                },
                {
                    text: '对话框',
                    url: 'modal'
                }
            ]
        },
        {
            icon: 'rocket',
            text: '动画',
            children: [{
                    text: '官方教程',
                    url: 'official-animation'
                },
                {
                    text: '基础动画',
                    url: 'base-animation'
                },
                {
                    text: '动画案例',
                    url: 'example-animation'
                }
            ]
        },
        {
            icon: 'compass',
            text: '拖拽',
            children: [{
                    text: 'Chess',
                    url: 'chess'
                },
                {
                    text: 'Dustbin',
                    url: 'dustbin'
                },
                {
                    text: 'DragAround',
                    url: 'dragaround'
                },
                {
                    text: 'Nesting',
                    url: 'nesting'
                },
                {
                    text: 'Sortable',
                    url: 'sortable'
                },
                {
                    text: 'Customize',
                    url: 'customize'
                },
                {
                    text: 'Other',
                    url: 'other'
                }
            ]
        },
        {
            icon: 'exception',
            text: '关于',
            url: 'about'
        }
    ]
    return dispatch => {
        dispatch(menuList(menus))
    }
}

export function openMenu(menu) {
    return {
        type: OPEN_MENU,
        payload: menu
    }
}