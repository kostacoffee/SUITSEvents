
import { connect } from 'react-redux';
import View from './view'
import State from 'services/state';
import { operations } from 'services/ducks/members'
import { DispatchProps } from './props'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Function) :DispatchProps => ({
    getMembers: () => {
        dispatch(operations.getMembers());
    }
})

export default withRouter(connect(null, mapDispatchToProps)(View));