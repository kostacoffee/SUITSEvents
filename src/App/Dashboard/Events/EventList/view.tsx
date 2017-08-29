import React from 'react'
import { Menu, Input } from 'antd'
import { Link } from 'react-router-dom'
import { StateProps, DispatchProps } from './props';
import style from './style.css';

const View: React.SFC<StateProps & DispatchProps> = ({events, setFilter}) => (
    <div>
        <Input.Search size="large" placeholder="Search for a event..." className={style.search} onChange={(e => setFilter(e.target.value))}/>
        <Menu className={style.menu}>
            {events.slice(0,50).map((evt) => (
                <Menu.Item className={style.menuItem} key={evt.id}>
                    <Link to={`/dashboard/events/${evt.id}`}>
                        <label>{evt.title}</label>
                        <p>{evt.description}</p>
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    </div>
)

export default View;