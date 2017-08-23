import client, { dataAndStatus } from './client';
import { AxiosResponse } from 'axios';

const getTokenInner = async (username: string, pass: string) :Promise<AxiosResponse> => {
    let data = {
        user: username,
        pass
    }

    return await client.post('/token', data);
}

let getToken = dataAndStatus(getTokenInner);

export default { 
    getToken
};