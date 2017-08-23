import State from 'services/state';
import { Event } from 'services/models'

const getEvents = (state: State) :Event[] => {
    return state.events.events;
}

export default {
    getEvents
}
