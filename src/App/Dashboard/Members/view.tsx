import React from 'react';
import { Menu, Input } from 'antd';
import { StateProps, DispatchProps } from './props';
import style from './style.css';

const View: React.SFC<StateProps & DispatchProps> = ({filteredMembers, setFilter}) => (
    <div className={style.menu}>
        <Input.Search placeholder="Search for a member" className={style.search} onChange={(e => setFilter(e.target.value))}/>
        <Menu onSelect={({key}) =>  console.log(key)}>
            {filteredMembers.slice(0,50).map((memb) => (
                <Menu.Item key={memb.id} className={style.menuItem}>
                    <h1>{memb.firstName}</h1>
                </Menu.Item>
            ))}
        </Menu>
    </div>
)

export default View;