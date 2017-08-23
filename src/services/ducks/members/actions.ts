import { TypeKeys, Action } from './types';
import ActionStatus from '../ActionStatus';
import { Member } from 'services/models';

const startGetMembers = () :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.START,
    members: [],
    error: "",
})

const setMembers = (members: Member[]) :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.SUCCESS,
    members,
    error: "",
})
 
const setError = (error: string) :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.FAIL,
    members: [],
    error,
})

const setFilter = (filter: string) :Action => ({
    type: TypeKeys.SET_FILTER,
    filter
})

export default {
    startGetMembers,
    setMembers,
    setError,
    setFilter
}
