import { Member } from 'services/models';

export interface StateProps {
    member: Member
    memberId: number
}

export interface ComponentState extends Member {

}

export interface DispatchProps {
    dispatch: Function
}