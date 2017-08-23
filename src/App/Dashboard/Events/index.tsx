import React from 'react';
import { Menu, Input } from 'antd';
import State from 'services/state'

const mapStateToProps = (state: State) => ({
    //events: getEvents(state)
})

const Events = () => (
    <div style={{width: "250px"}}>
    <Input.Search placeholder="Search for event" style={{height: "32px"}}/>
    <Menu>
        <Menu.Item>
            <span>Event 1</span>
        </Menu.Item>
        <Menu.Item>
            <span>Event 2</span>
        </Menu.Item>
        <Menu.Item>
            <span>Event 3</span>
        </Menu.Item>
        <Menu.Item>
            <span>Event 4</span>
            <span>Desc</span>
        </Menu.Item>
    </Menu>
    </div>
)

export default Events;
