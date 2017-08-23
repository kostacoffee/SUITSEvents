import actions from './actions';
import { selectors } from '../auth';
import config from 'config';
import { Member } from 'services/api';

const getMembers = () => async (dispatch: Function) => {
    dispatch(actions.startGetMembers());
    let resp;
    try {
        resp = await Member.getMembers();
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
        dispatch(actions.setMembers(members));
    }
}

export default {
    getMembers
}