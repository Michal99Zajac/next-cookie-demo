'use client'

export default function GlobalErrorPage({ error }) {

    if (error.name === "AxiosError") {
        return <div>
            {error.message}
        </div>
    }

    return (
        <div>
            Global error page
        </div>
    )
}