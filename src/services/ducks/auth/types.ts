import ActionStatus from '../ActionStatus';

export enum TypeKeys {
    LOGIN = 'auth/LOGIN'
}

export interface LoginAction {
    type: TypeKeys.LOGIN
    status: ActionStatus
    token?: string
    error?: string
}

export type Action = LoginAction;