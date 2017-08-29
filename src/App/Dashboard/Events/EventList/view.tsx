import React from 'react'
import { Input } from 'antd'
import { Link } from 'react-router-dom'
import { StateProps, DispatchProps } from './props';
import style from './style.css';
import List, {ListItem} from 'App/components/List'

const View: React.SFC<StateProps & DispatchProps> = ({events, setFilter}) => (
    <div>
        <Input.Search size="large" placeholder="Search for an event..." className={style.search} onChange={(e => setFilter(e.target.value))}/>
        <List>
            {events.slice(0,50).map((evt) => (
                <ListItem key={evt.id}>
                    <Link to={`/dashboard/events/${evt.id}`}>
                        <label>{evt.title}</label>
                        <p>{evt.description}</p>
                    </Link>
                </ListItem>
            ))}
        </List>
    </div>
)

export default View;