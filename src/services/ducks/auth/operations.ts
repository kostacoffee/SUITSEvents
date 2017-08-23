import actions from './actions';
import config from 'config';
import { Token } from 'services/api';
import { Action } from './types'
import client from 'services/api/client';

const doLogin = (username: string, pass: string) => {

    return async (dispatch: Function) => {
        dispatch(actions.startLogin());
        let resp;
        try {
            resp = await Token.getToken(username, pass);
        } catch (e) {
            dispatch(actions.setError("Something went very wrong..."));
            return;
        }
        
        if (resp.status >= 400) {
            let error = resp.body.message;
            dispatch(actions.setError(error));
        }
        else {
            let token = resp.body.token;
            sessionStorage.setItem('token', token);

            // When we successfully log in, update the client with the auth token.
            client.defaults.headers['Authorization'] = 'Bearer '+token;

            dispatch(actions.setToken(token));
        }
    }

}

export default {
    doLogin
}
