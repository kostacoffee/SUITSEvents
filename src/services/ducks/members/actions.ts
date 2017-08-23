import { TypeKeys, Action } from './types';
import ActionStatus from '../ActionStatus';
import { Member } from 'services/models';

const startGetMembers = () :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.START
})

const setMembers = (members: Member[]) :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.SUCCESS,
    members
})
 
const setError = (error: string) :Action => ({
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus.FAIL,
    error
})

export default {
    startGetMembers,
    setMembers,
    setError
}
