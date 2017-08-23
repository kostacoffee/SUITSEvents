import { combineReducers } from 'redux';
import { TypeKeys, Action } from './types';
import ActionStatus from '../ActionStatus'
import State from './state'

const initialState: State = {
    loading: false,
    token: sessionStorage.token,
    error: ''
}

const loginReducer = (state: State, action: Action) :State => {
    switch(action.status) {
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
    }
}

const reducer = (state: State = initialState, action: Action) :State => {
    switch (action.type) {

        case TypeKeys.LOGIN:
            return loginReducer(state, action)
            
        default:
            return state;

    }
}

export default reducer;
