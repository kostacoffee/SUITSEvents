import { connect } from 'react-redux';
import View from './view';
import { StateProps, DispatchProps } from './props'
import { selectors, operations } from 'services/ducks/events'
import State from 'services/state'

const mapStateToProps = (state: State) :StateProps => ({
    events: selectors.getFilteredEvents(state)
})

const mapDispatchToProps = (dispatch: Function) :DispatchProps => ({
    setFilter: (filter: string) => {
        dispatch(operations.setFilter(filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(View as any);