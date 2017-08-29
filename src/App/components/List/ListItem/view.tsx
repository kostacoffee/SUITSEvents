import React from 'react'
import { Menu } from 'antd'
import style from './style.css'

const ListItem = (props: any) => (
    <Menu.Item {...props} className={style.menuItem}>
        {props.children}
    </Menu.Item>
)

export default ListItem;