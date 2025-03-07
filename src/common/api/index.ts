import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://api.demo.local:10000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    withCredentials: true,
})
