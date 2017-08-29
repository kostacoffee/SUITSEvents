import State from 'services/state';
import { Event } from 'services/models'
import { event as defaultEvent} from 'services/defaults'

const getEvents = (state: State) :Event[] => {
    return state.events.events;
}

const getFilteredEvents = (state: State) :Event[] => {
    //TODO remove the field guards when possible
    let filter = state.events.filter.toLowerCase();
    return state.events.events.filter(memb => (
        (memb.title && memb.title.toLowerCase().includes(filter))
    ))
}

const getEvent = (state: State, id: number) :Event => {
    let event = state.events.events.find((m => m.id == id));
    if (event == undefined)
        return defaultEvent
    return event
}

export default {
    getEvents,
    getFilteredEvents,
    getEvent
}
