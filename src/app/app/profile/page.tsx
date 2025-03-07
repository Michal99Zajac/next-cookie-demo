import {cookies} from "next/headers";
import {api} from "@/common/api";
import {LogoutButton} from "@/common/components/logout-button";
import {ClientActions} from "@/common/components/client-actions";

export default async function ProfilePage() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value

    const { data: profile } = await api.get('/profile', {
        headers: {
            'Cookie': cookieStore.toString(),
        }
    })

    // BLOCKED via lax and strict
    // ALLOWED via SameSite=None; Secure
    const post = async () => {
        'use server'

        const cookieStore = await cookies()

        try {
            const response = await api.post('/profile', {
                headers: {
                    'Cookie': cookieStore.toString(),
                }
            })

            console.log('Profile POST response:', response.data)
        } catch (error) {
            console.error('Profile POST failed status:', error.response.status)
        }
    }

    // BLOCKED via lax and strict
    // ALLOWED via SameSite=None; Secure
    const put = async () => {
        'use server'

        const cookieStore = await cookies()

        try {
            const response = await api.put('/profile', {
                headers: {
                    'Cookie': cookieStore.toString(),
                }
            })

            console.log('Profile PUT response:', response.data)
        } catch (error) {
            console.error('Profile PUT failed status:', error.response.status)
        }
    }

    // BLOCKED via lax and strict (depends on the browser)
    // ALLOWED via SameSite=None; Secure
    const del = async () => {
        'use server'

        const cookieStore = await cookies()

        try {
            const response = await api.delete('/profile', {
                headers: {
                    'Cookie': cookieStore.toString(),
                }
            })

            console.log('Profile DELETE response:', response.data)
        } catch (error) {
            console.error('Profile DELETE failed status:', error.response.status)
        }
    }

    // ALLOWED always
    const get = async () => {
        'use server'

        const cookieStore = await cookies()

        try {
            const response = await api.get('/profile', {
                headers: {
                    'Cookie': cookieStore.toString(),
                }
            })

            console.log('Profile GET response:', response.data)
        } catch (error) {
            console.error('Profile GET failed status:', error.response.status)
        }
    }

    return <div>
        <h1>Profile</h1>
        <p>Session: {session}</p>
        <p className="mb-4">Profile: {JSON.stringify(profile)}</p>
        <p>Server actions:</p>
        <div className="flex gap-2 mb-4">
            <button onClick={get}>GET</button>
            <button onClick={post}>POST</button>
            <button onClick={put}>PUT</button>
            <button onClick={del}>DELETE</button>
        </div>
        <p>Client actions:</p>
        <div className="flex gap-2 mb-4">
            <ClientActions />
        </div>
        <LogoutButton />
    </div>
}