import ActionStatus from '../ActionStatus';
import { Event } from 'services/models';

export enum TypeKeys {
    GET_EVENTS = 'events/GET_EVENTS',
}

export interface GetEventsAction {
    type: TypeKeys.GET_EVENTS,
    status: ActionStatus,
    events: Event[],
    error: string,
}

export type Action = GetEventsAction