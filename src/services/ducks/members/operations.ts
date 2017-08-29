import actions from './actions';
import { selectors } from '../auth';
import config from 'config';
import { Member } from 'services/api';
import { Member as MemberModel } from 'services/models';

const getMembers = () => async (dispatch: Function) => {
    dispatch(actions.startGetMembers());
    let resp;
    try {
        resp = await Member.getMembers();
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
        dispatch(actions.setMembers(members));
    }
}

const setFilter = actions.setFilter;

export default {
    getMembers,
    setFilter
}