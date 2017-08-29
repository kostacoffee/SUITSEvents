import State from 'services/state';
import { Member } from 'services/models'
import { member as defaultMember } from 'services/defaults'

const getMembers = (state: State) :Member[] => {
    return state.members.members;
}

const getFilteredMembers = (state: State) :Member[] => {
    //TODO remove the field guards when possible
    let filter = state.members.filter.toLowerCase();
    return state.members.members.filter(memb => (
        (memb.firstName && memb.firstName.toLowerCase().includes(filter)) ||
        (memb.lastName && memb.lastName.toLowerCase().includes(filter)) ||
        (memb.access && memb.access.toString().includes(filter))
    ))
}

const getMember = (state: State, id: number) :Member => {
    let member = state.members.members.find((m => m.id == id));
    if (member == undefined)
        return defaultMember
    return member
}

export default {
    getMembers,
    getFilteredMembers,
    getMember
}
