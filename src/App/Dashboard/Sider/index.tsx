import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const SideMenu = () => (
    <Menu>
        <Menu.Item key='/dashboard'>
            <Link to='/dashboard'>
                <Icon type='pie-chart'/>
                <span>Dashboard</span>
            </Link>
        </Menu.Item>
        <Menu.Item key='/dashboard/events'>
            <Link to='/dashboard/events'>
                <Icon type='calendar'/>
                <span>Events</span>
            </Link>
        </Menu.Item>
        <Menu.Item key='/dashboard/members'>
            <Link to='/dashboard/members'>
                <Icon type='team'/>
                <span>Members</span>
            </Link>
        </Menu.Item>
    </Menu>
)

export default SideMenu;
