import actions from './actions';
import fetch from 'isomorphic-fetch';

const doLogin = (username, pass) => {

    return async (dispatch) => {
        dispatch(actions.startLogin());
        let resp = await fetch("https://api.suits.org.au/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: username,
                pass
            })
        });

        let resp_body = await resp.json();

        if (resp.status >= 400) {
            let error = resp_body.message;
            dispatch(actions.setError(error));
        }
        else {
            let token = resp_body.token;
            dispatch(actions.setToken(token));
        }
    }

}

export default {
    doLogin
}
