import React from 'react';
import { Menu } from 'antd';
import { StateProps } from './props';

const View: React.SFC<StateProps> = ({members}) => (
    <Menu>
        {members.map((memb, idx) => (
            <Menu.Item key={idx}>
                <h1>{memb.firstName}</h1>
            </Menu.Item>
        ))}
    </Menu>
)

export default View;