import { combineReducers } from 'redux';
import types from './types';

const initialState = {
    loading: false,
    token: sessionStorage.getItem('token'),
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN_START:
            return {
                ...state,
                loading: true
            }

        case types.LOGIN_SUCCESS:
            return {
                loading: false,
                token: action.token,
                error: ''
            }

        case types.LOGIN_FAIL:
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
