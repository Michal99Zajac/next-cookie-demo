'use client'

import {api} from "@/common/api";

export function ClientActions() {
    // ALLOWED always (if domain is the same)
    const post = async () => {
        try {
            const response = await api.post('/profile')
            console.log('Profile POST response:', response.data)
        } catch (error) {
            console.error('Profile POST failed status:', error.response.status)
        }
    }

    // ALLOWED always (if domain is the same)
    const put = async () => {
        try {
            const response = await api.put('/profile')

            console.log('Profile PUT response:', response.data)
        } catch (error) {
            console.error('Profile PUT failed status:', error.response.status)
        }
    }

    // ALLOWED always (if domain is the same)
    const del = async () => {

        try {
            const response = await api.delete('/profile')

            console.log('Profile DELETE response:', response.data)
        } catch (error) {
            console.error('Profile DELETE failed status:', error.response.status)
        }
    }

    // ALLOWED always
    const get = async () => {

        try {
            const response = await api.get('/profile')

            console.log('Profile GET response:', response.data)
        } catch (error) {
            console.error('Profile GET failed status:', error.response.status)
        }
    }

    return (
        <>
            <button onClick={get}>GET</button>
            <button onClick={post}>POST</button>
            <button onClick={put}>PUT</button>
            <button onClick={del}>DELETE</button>
        </>
    )
}
