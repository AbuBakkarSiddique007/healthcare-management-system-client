import { httpClient } from "@/lib/axios/httpClient"

const getDoctors = async () => {
    try {
        const response = await httpClient.get('/doctors')
        return response
    }
    catch (error) {
        console.error('Error fetching doctors:', error)
        throw error
    }
}


export const authServices = {
    getDoctors,
}