import actions from './actions';
import { selectors } from '../auth';
import config from 'config';
import { Event } from 'services/api';

const getEvents = () => async (dispatch: Function) => {
    dispatch(actions.startGetEvents());
    let resp;
    try {
        resp = await Event.getEvents();
    } catch (e) {
        dispatch(actions.setError("Something went very wrong"));
        return;
    }

    if (resp.isError) {
        let error = resp.data.message;
        dispatch(actions.setError(error));
    }
    else {
        let members = resp.data;
        dispatch(actions.setEvents(members));
    }
}

const setFilter = actions.setFilter;

export default {
    getEvents,
    setFilter
}