import { Event } from 'services/models';

export interface StateProps {
    events: Event[]
}

export interface DispatchProps {
    setFilter: Function
}