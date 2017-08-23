import { TypeKeys } from './types';
import ActionStatus from '../ActionStatus';
import { Action } from './types';

const startLogin = () :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.START
})

const setToken = (token: string) :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.SUCCESS,
    token
})

const setError = (error: string) :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.FAIL,
    error
})

export default {
    startLogin,
    setToken,
    setError
}
