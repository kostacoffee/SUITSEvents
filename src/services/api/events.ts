
import client, { dataAndStatus } from './client';
import { AxiosResponse } from 'axios'

const getEventsInner = async () :Promise<AxiosResponse> => {
    //TODO decortor for try catch and return error when needed
    return await client.get('/events')
}
const getEvents = dataAndStatus(getEventsInner);

export default {
    getEvents
}