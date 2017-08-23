import ActionStatus from '../ActionStatus';
import { Member } from 'services/models';

export enum TypeKeys {
    GET_MEMBERS = 'members/GET_MEMBERS',
    SET_FILTER = 'members/SET_FILTER',
}

export interface GetMembersAction {
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus,
    members: Member[],
    error: string,
}

export interface SetFilterAction {
    type: TypeKeys.SET_FILTER
    filter: string
}

export type Action = GetMembersAction | SetFilterAction;