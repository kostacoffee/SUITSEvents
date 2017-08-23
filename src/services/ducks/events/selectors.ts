import State from 'services/state';
import { Member } from 'services/models'

const getMembers = (state: State) :Member[] => {
    return state.members.members;
}

export default {
    getMembers
}
