import State from 'services/state';
const isLoggedIn = (state: State) : boolean => {
    return Boolean(state.auth.token);
}

const hasLoginFailed = (state: State) : boolean => {
    return Boolean(state.auth.error);
}

const getErrorMsg = (state: State) : string => {
    return state.auth.error;
}

const isLoading = (state: State) : boolean => {
    return state.auth.loading;
}

export default {
    isLoggedIn,
    hasLoginFailed,
    getErrorMsg,
    isLoading
}
