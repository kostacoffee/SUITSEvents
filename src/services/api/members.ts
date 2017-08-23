import client, { dataAndStatus } from './client';
import { AxiosResponse } from 'axios'

const getMembersInner = async () :Promise<AxiosResponse> => {
    //TODO decortor for try catch and return error when needed
    return await client.get('/members')
}
const getMembers = dataAndStatus(getMembersInner);

export default {
    getMembers
}