import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Sider from './Sider';
import Events from './Events';

const Dashboard = () => (
    <Layout>
        <Layout.Sider collapsed>
            {/* TODO add logo */}
            <Sider />
        </Layout.Sider>
        <Layout.Content>
            <Route exact path='/dashboard' render={() => <div>Dashboard</div>} />
            <Route exact path='/dashboard/events' component={Events} />
            <Route exact path='/dashboard/members' render={() => <div>memnts</div>} />
        </Layout.Content>
    </Layout>
)

export default Dashboard;
