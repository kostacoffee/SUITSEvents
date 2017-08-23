import ActionStatus from '../ActionStatus';
import { Member } from 'services/models';

export enum TypeKeys {
    GET_MEMBERS = 'members/GET_MEMBERS',
    ADD_MEMBER = 'members/ADD_MEMBER',
    UPDATE_MEMBER = 'members/UPDATE_MEMBER'
}

export interface AddMemberAction {
    type: TypeKeys.ADD_MEMBER,
    status: ActionStatus,
    member?: Member
    error?: string,
}

export interface UpdateMemberAction {
    type: TypeKeys.UPDATE_MEMBER,
    status: ActionStatus,
    member?: Member
    error?: string,
}

export interface GetMembersAction {
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus,
    members?: Member[],
    error?: string,
}

export type Action = GetMembersAction | UpdateMemberAction | AddMemberAction;