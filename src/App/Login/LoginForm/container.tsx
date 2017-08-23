import React from 'react';
import { connect } from 'react-redux';
import View from './view';
import { operations, selectors } from 'services/ducks/auth';
import State from 'services/state';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state: State) => ({
    hasLoginFailed: selectors.hasLoginFailed(state),
    errorMsg: selectors.getErrorMsg(state),
    isLoading: selectors.isLoading(state)
})

const mapDispatchToProps = (dispatch: Function) => ({
    doLogin: ({username, password}: {username: string, password: string}) => {
        dispatch(operations.doLogin(username, password));
    }
})

const LoginForm = (props: any) => (
    <View {...props} onSubmit={props.doLogin} />
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
