import View from './view';
import State from 'services/state';
import { selectors } from 'services/ducks/members';
import { connect } from 'react-redux';
import { StateProps } from './props';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state: State, props: any) :StateProps => ({
    member: selectors.getMember(state, props.match.params.memberId),
    memberId: props.match.params.memberId
})

export default withRouter(connect(mapStateToProps)(View as any))
