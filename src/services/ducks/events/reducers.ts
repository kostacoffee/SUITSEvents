import { combineReducers } from 'redux';
import { TypeKeys, Action, GetEventsAction } from './types';
import ActionStatus from '../ActionStatus';
import State from './state';
import { Event } from 'services/models'

const initialState: State = {
    events: [],
    loading: false,
    error: ''
}

const getEventsReducer = (state: State, action: GetEventsAction) :State => {
    switch (action.status) {
        case ActionStatus.START:
            return {
                ...state,
                loading: true
            }

        case ActionStatus.SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.events
            }
        
        case ActionStatus.FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
    }
}

const reducer = (state: State = initialState, action: Action) :State => {
    switch (action.type) {

        case TypeKeys.GET_EVENTS:
            return getEventsReducer(state, action);
        
        default:
            return state;

        }
}

export default reducer;
