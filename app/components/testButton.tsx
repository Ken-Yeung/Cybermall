"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function TestButton() {
    const router = useRouter()
    return (
        <button onClick={() => {
            router.push("/next")
        }}>Press Me</button>
    )
}
