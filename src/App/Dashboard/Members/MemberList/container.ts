import { connect } from 'react-redux';
import View from './View';
import State from 'services/state'
import { StateProps, DispatchProps } from './props';
import { selectors } from 'services/ducks/members'
import { operations } from 'services/ducks/members'

const mapStateToProps = (state: State) :StateProps => ({
    filteredMembers: selectors.getFilteredMembers(state)
})

const mapDispatchToProps = (dispatch: Function) :DispatchProps => ({
    setFilter: (filter: string) => {
        dispatch(operations.setFilter(filter));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(View);