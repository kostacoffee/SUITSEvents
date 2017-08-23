import { State as AuthState } from 'services/ducks/auth'
export default interface State {
    auth: AuthState

    form: any
    router: any
}