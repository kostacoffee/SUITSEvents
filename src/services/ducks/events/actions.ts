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

/*
const addMember = (member: Member) :ActionType => ({
    type: TypeKeys.ADD_MEMBER,
    member
})

const updateMember = (member: Member) :ActionType => ({
    type: TypeKeys.UPDATE_MEMBER,
    member
})
*/

export default {
    startGetEvents,
    setEvents,
    setError
}
