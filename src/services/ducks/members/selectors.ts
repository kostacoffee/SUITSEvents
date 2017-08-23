import State from 'services/state';
import { Member } from 'services/models'

const getMembers = (state: State) :Member[] => {
    return state.members.members;
}

const getFilteredMembers = (state: State, filter: string) :Member[] => {
    //TODO remove the field guards when possible
    filter = filter.toLowerCase();
    return state.members.members.filter(memb => (
        (memb.firstName && memb.firstName.toLowerCase().includes(filter)) ||
        (memb.lastName && memb.lastName.toLowerCase().includes(filter)) ||
        (memb.access && memb.access.toString().includes(filter))
    ))
}

const getFilter = (state: State) :string => {
    return state.members.filter;
}

export default {
    getMembers,
    getFilter,
    getFilteredMembers
}
