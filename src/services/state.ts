import { State as AuthState } from 'services/ducks/auth'
import { State as MembersState } from 'services/ducks/members'
export default interface State {
    auth: AuthState
    members: MembersState

    form: any
    router: any
}