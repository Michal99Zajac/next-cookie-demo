'use client'

import { api } from '@/common/api'
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter()

    const handleLogin = async () => {
        try {
            await api.post('/login', {
                username: 'admin',
                password: 'admin',
            })

            router.push('/app/profile')
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    return (
        <button onClick={handleLogin}>Login</button>
    )
}