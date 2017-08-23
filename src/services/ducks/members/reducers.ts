import { combineReducers } from 'redux';
import { TypeKeys, Action, AddMemberAction, UpdateMemberAction, GetMembersAction } from './types';
import ActionStatus from '../ActionStatus';
import State from './state';
import { Member } from 'services/models'


const initialState: State = {
    members: [],
    loading: false,
    error: ''
}

const getMembersReducer = (state: State, action: GetMembersAction) :State => {
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
                members: action.members
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

        case TypeKeys.GET_MEMBERS:
            return getMembersReducer(state, action);
        
        default:
            return state;

        }
}

export default reducer;
