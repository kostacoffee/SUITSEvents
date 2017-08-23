
import { connect } from 'react-redux';
import View from './view'
import State from 'services/state';
import { operations as memberOperations } from 'services/ducks/members'
import { operations as eventOperations} from 'services/ducks/events'
import { DispatchProps } from './props'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch: Function) :DispatchProps => ({
    getMembers: () => {
        dispatch(memberOperations.getMembers());
    },
    getEvents: () => {
        dispatch(eventOperations.getEvents());
    }
})

export default withRouter(connect(null, mapDispatchToProps)(View));