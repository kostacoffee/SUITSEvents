import React from 'react'
import { Menu } from 'antd'
import style from './style.css'

const List: React.SFC<any> = (props: any) => (
    <Menu {...props} className={style.menu}>
        {props.children}
    </Menu>
)

export default List;