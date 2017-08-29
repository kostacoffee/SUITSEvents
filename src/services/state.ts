import { State as AuthState } from 'services/ducks/auth'
import { State as MembersState } from 'services/ducks/members'
import { State as EventsState } from 'services/ducks/events'
export default interface State {
    auth: AuthState
    members: MembersState
    events: EventsState
    form: any
}