import axios from "axios";
import { getToken } from "./helpers";

export const api = axios.create({
    baseURL: 'https://hris.albatech.id/api/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    console.log('error request axios', error);
    return Promise.reject(error);
})

api.interceptors.response.use(
    response => response,
    error => {
        console.log('error response axios', error);
        return Promise.reject(error);
    }
)