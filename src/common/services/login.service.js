import axios from 'axios';
import { env } from '../utilities/environment';

export const login = (payload) => {
    return axios.post(`${env.apiUrl}/login`, payload, {}).then(response => ({ response: response.data }))
        .catch(error => ({ error }));
}

export const signup = (payload) => {
    return axios.post(`${env.apiUrl}/signup`, payload, {}).then(response => ({ response: response.data }))
        .catch(error => ({ error }));
}