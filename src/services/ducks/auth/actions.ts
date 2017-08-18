import types from './types';

const startLogin = () => ({
    type: types.LOGIN_START
})

const setToken = (token) => ({
    type: types.LOGIN_SUCCESS,
    token
})

const setError = (error) => ({
    type: types.LOGIN_FAIL,
    error
})

export default {
    startLogin,
    setToken,
    setError
}
