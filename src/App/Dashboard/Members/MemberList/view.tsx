import React from 'react';
import { Input } from 'antd';
import List, {ListItem} from 'App/components/List'
import { Link } from 'react-router-dom';
import { StateProps, DispatchProps } from './props';
import style from './style.css'

const View: React.SFC<StateProps & DispatchProps> = ({filteredMembers, setFilter}) => (
    <div>
        <Input.Search size="large" placeholder="Search for a member..." className={style.search} onChange={(e => setFilter(e.target.value))}/>
        <List>
            {filteredMembers.slice(0,50).map((memb) => (
                <ListItem key={memb.id}>
                    <Link to={`/dashboard/members/${memb.id}`}>
                        <label>{`${memb.firstName} ${memb.lastName}`}</label>
                    </Link>
                </ListItem>
            ))}
        </List>
    </div>
)

export default View;