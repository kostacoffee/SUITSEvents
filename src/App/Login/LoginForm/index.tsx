import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { operations, selectors } from 'services/ducks/auth';

const mapStateToProps = (state) => ({
    hasLoginFailed: selectors.hasLoginFailed(state),
    errorMsg: selectors.getErrorMsg(state),
    isLoading: selectors.isLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: ({username, password}) => {
        dispatch(operations.doLogin(username, password));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
