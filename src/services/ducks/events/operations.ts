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

    if (resp.status >= 400) {
        let error = resp.body.message;
        dispatch(actions.setError(error));
    }
    else {
        let members = resp.body;
        dispatch(actions.setEvents(members));
    }
}

export default {
    getEvents
}