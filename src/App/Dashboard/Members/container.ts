import { connect } from 'react-redux';
import View from './View';
import State from 'services/state'
import { StateProps } from './props';
import { selectors } from 'services/ducks/members'

const mapStateToProps = (state: State) :StateProps => ({
    members: selectors.getMembers(state)
})

export default connect(mapStateToProps)(View);