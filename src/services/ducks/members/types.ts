import ActionStatus from '../ActionStatus';
import { Member } from 'services/models';

export enum TypeKeys {
    GET_MEMBERS = 'members/GET_MEMBERS',
}

export interface GetMembersAction {
    type: TypeKeys.GET_MEMBERS,
    status: ActionStatus,
    members?: Member[],
    error?: string,
}

export type Action = GetMembersAction;