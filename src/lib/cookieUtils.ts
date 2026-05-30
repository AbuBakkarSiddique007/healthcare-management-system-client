"use server"

import { cookies } from "next/headers"


export const setCookie = async (
    name: string,
    value : string,
    maxAgeInSeconds: number
) => {
    const cookieStore = await cookies()

    cookieStore.set(
        name,
        value,
        {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: maxAgeInSeconds,
        }
    )
}

export const getCookie = async (name: string) => {
    const cookieStore = await cookies()
    const cookieValue = cookieStore.get(name)?.value
    return cookieValue
}

export const deleteCookie = async (name: string) => {
    const cookieStore = await cookies()
    cookieStore.delete(name)
}