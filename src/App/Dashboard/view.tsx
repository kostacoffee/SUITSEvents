import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
import Sider from './Sider';
import Events from './Events';
import Props from './props';
import Members from './Members';

class Dashboard extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.getMembers();
        //this.props.getEvents();
    }

    render() {
        return (
            <Layout>
                <Layout.Sider collapsed>
                    {/* TODO add logo */}
                    <Sider />
                </Layout.Sider>
                <Layout.Content>
                    <Route exact path='/dashboard' render={() => <div>Dashboard</div>} />
                    { /* <Route exact path='/dashboard/events' component={Events} /> */}
                    <Route exact path='/dashboard/members' component={Members} />
                </Layout.Content>
            </Layout>
        )
    }
}

export default Dashboard;
