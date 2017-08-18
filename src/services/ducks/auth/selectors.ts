const isLoggedIn = (state) => {
    return Boolean(state.auth.token);
}

const hasLoginFailed = (state) => {
    return Boolean(state.auth.error);
}

const getErrorMsg = (state) => {
    return state.auth.error;
}

const isLoading = (state) => {
    return state.auth.loading;
}

export default {
    isLoggedIn,
    hasLoginFailed,
    getErrorMsg,
    isLoading

}
