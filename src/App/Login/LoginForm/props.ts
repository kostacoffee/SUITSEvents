export interface StateProps {
    hasLoginFailed: boolean
    errorMsg: string
    isLoading: boolean
}

export interface DispatchProps {
    doLogin: Function
}

export interface ComponentState {
    username: string
    password: string
}