import axios, { AxiosResponse } from 'axios';

let client = axios.create({
    baseURL: 'https://api.suits.org.au',
    responseType: 'json',
    // Set the auth header at startup (if we logged in previously, we will be on dashboard with a token)
    // If we didn't log in there will be no token. We will be on the login page
    headers: {
        Authorization: 'Bearer '+sessionStorage.getItem('token')
    }
})

export interface ApiResponse {
    data: any,
    isError: boolean
}

export function dataAndStatus(func: (...args: any[]) => Promise<AxiosResponse>) : (...args: any[]) => Promise<ApiResponse> {
    return async (...args: any[]) => {
        let resp;
        let isError = false;
        try {
            resp = await func(...args)
        } catch (err) {
            resp = err.response;
            isError = true;
        }

        return {
            data: resp.data,
            isError
        }
    }
}

export default client;