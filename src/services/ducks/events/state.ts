import { Event } from 'services/models';
export default interface State {
    events: Event[]
    loading: boolean
    error: string
    filter: string
}