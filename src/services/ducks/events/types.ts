import ActionStatus from '../ActionStatus';
import { Event } from 'services/models';

export enum TypeKeys {
    GET_EVENTS = 'events/GET_EVENTS',
    SET_FILTER = 'events/SET_FILTER'
}

export interface GetEventsAction {
    type: TypeKeys.GET_EVENTS,
    status: ActionStatus,
    events: Event[],
    error: string,
}

export interface SetFilterAction {
    type: TypeKeys.SET_FILTER,
    filter: string
}

export type Action = GetEventsAction | SetFilterAction