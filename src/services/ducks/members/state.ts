import { Member } from 'services/models';
export default interface State {
    members: Member[],
    loading: boolean,
    error: string
}