import { Member } from 'services/models';
export interface StateProps {
    filteredMembers: Member[]
}

export interface DispatchProps {
    setFilter: Function
}