import { TypeKeys, Action } from './types';
import ActionStatus from '../ActionStatus';
import { Event } from 'services/models';

const startGetEvents = () :Action => ({
    type: TypeKeys.GET_EVENTS,
    status: ActionStatus.START
})

const setEvents = (events: Event[]) :Action => ({
    type: TypeKeys.GET_EVENTS,
    status: ActionStatus.SUCCESS,
    events
})
 
const setError = (error: string) :Action => ({
    type: TypeKeys.GET_EVENTS,
    status: ActionStatus.FAIL,
    error
})

export default {
    startGetEvents,
    setEvents,
    setError
}
