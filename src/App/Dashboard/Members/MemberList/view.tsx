import React from 'react';
import { Input, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { StateProps, DispatchProps } from './props';
import style from './style.css';

const View: React.SFC<StateProps & DispatchProps> = ({filteredMembers, setFilter}) => (
    <div>
        <Input.Search size="large" placeholder="Search for a member..." className={style.search} onChange={(e => setFilter(e.target.value))}/>
        <Menu className={style.menu}>
            {filteredMembers.slice(0,50).map((memb) => (
                <Menu.Item className={style.menuItem} key={memb.id}>
                    <Link to={`/dashboard/members/${memb.id}`}>
                        <label>{`${memb.firstName} ${memb.lastName}`}</label>
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    </div>
)

export default View;