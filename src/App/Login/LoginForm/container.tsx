import { connect } from 'react-redux';
import View from './view';
import { operations, selectors } from 'services/ducks/auth';
import State from 'services/state';
import { withRouter } from 'react-router-dom';
import { StateProps, DispatchProps } from './props'

const mapStateToProps = (state: State) :StateProps => ({
    hasLoginFailed: selectors.hasLoginFailed(state),
    errorMsg: selectors.getErrorMsg(state),
    isLoading: selectors.isLoading(state)
})

const mapDispatchToProps = (dispatch: Function) :DispatchProps => ({
    doLogin: (username: string, password: string) => {
        dispatch(operations.doLogin(username, password));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));
