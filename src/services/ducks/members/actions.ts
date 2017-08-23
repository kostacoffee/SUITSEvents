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
    startGetMembers,
    setMembers,
    setError
}
