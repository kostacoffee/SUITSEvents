import { combineReducers } from 'redux';
import { TypeKeys, Action } from './types';
import ActionStatus from '../ActionStatus'

interface State {
    loading: boolean
    token: string
    error: string
}

const initialState: State = {
    loading: false,
    token: sessionStorage.getItem('token'),
    error: ''
}

const reducer = (state: State = initialState, action: Action) :State => {
    switch (action.status) {

        case ActionStatus.START:
            return {
                ...state,
                loading: true
            }

        case ActionStatus.SUCCESS:
            return {
                loading: false,
                token: action.token,
                error: ''
            }

        case ActionStatus.FAIL:
            return {
                loading: false,
                token: '',
                error: action.error
            }

        default:
            return state;

    }
}

export default reducer;
