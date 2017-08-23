import { combineReducers } from 'redux';
import { TypeKeys, Action, Member, AddMemberAction, UpdateMemberAction, GetMembersAction } from './types';
import ActionStatus from '../ActionStatus';

interface State {
    members: Member[],
    loading: boolean,
    error: string
}

const initialState: State = {
    members: [],
    loading: false,
    error: ''
}

const memberReducer = (state: State, action: Action) :Member[] => {
    switch (action.type) {
        case TypeKeys.ADD_MEMBER:
            return [...state.members, action.member]

        case TypeKeys.GET_MEMBERS:
            return action.members

        case TypeKeys.UPDATE_MEMBER:
            return state.members.map((m: Member) =>
                (m.id == action.member.id) ?
                action.member
                : m
            )
    }
}

const reducer = (state: State = initialState, action: Action) :State => {
    switch (action.status) {

        case ActionStatus.START:
            return {
                ...state, 
                loading: true
            }

        case ActionStatus.FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case ActionStatus.SUCCESS:
            return {
                loading: false,
                error: action.error,
                members: memberReducer(state, action)
            }

        default:
            return state;

        }
}

export default reducer;
