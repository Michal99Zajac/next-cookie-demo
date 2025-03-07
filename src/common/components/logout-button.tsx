'use client'

import {api} from "@/common/api";
import {useRouter} from "next/navigation";

export function LogoutButton() {
    const router = useRouter()

    const logout = async () => {
        try {
            await api.post('/logout')
            router.push('/auth/login')
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return <button onClick={logout} className="!bg-red-500">Logout</button>
}