"use client"

import { httpClient } from "@/lib/axios/httpClient"

export const getDoctors = async () => {
    try {
        const response = await httpClient.get('/doctors')
        return response.data
    }
    catch (error) {
        console.error('Error fetching doctors:', error)
        throw error
    }
}