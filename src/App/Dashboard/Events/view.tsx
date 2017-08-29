import React from 'react';
import { Row, Col } from 'antd';
import { Route } from 'react-router-dom'
import EventList from './EventList';
//import EventView from './EventView'

const View: React.SFC = () => (
    <Row>
        <Col span={8}>
            <EventList/>
        </Col>
        <Col span={16}>

        {/*
            <Route exact path='/dashboard/members/:memberId' component={EventView}/> 
        */}
        </Col>
    </Row>
)

export default View;
