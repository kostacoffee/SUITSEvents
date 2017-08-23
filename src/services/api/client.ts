import axios, { AxiosResponse } from 'axios';

let client = axios.create({
    baseURL: 'http://localhost:5000',
    responseType: 'json',
    // Set the auth header at startup (if we logged in previously, we will be on dashboard with a token)
    // If we didn't log in there will be no token. We will be on the login page
    headers: {
        Authorization: 'Bearer '+sessionStorage.getItem('token')
    }
})

export interface ApiResponse {
    body: any,
    status: number
}

export function dataAndStatus(func: (...args: any[]) => Promise<AxiosResponse>) : (...args: any[]) => Promise<ApiResponse> {
    return async (...args: any[]) => {
        let resp = await func(...args)

        return {
            body: resp.data,
            status: resp.status
        }
    }
}

export default client;