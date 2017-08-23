import { TypeKeys } from './types';
import ActionStatus from '../ActionStatus';
import { Action } from './types';

const startLogin = () :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.START,
    token: "",
    error: ""
})

const setToken = (token: string) :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.SUCCESS,
    token,
    error: ""
})

const setError = (error: string) :Action => ({
    type: TypeKeys.LOGIN,
    status: ActionStatus.FAIL,
    token: "",
    error
})

export default {
    startLogin,
    setToken,
    setError
}
