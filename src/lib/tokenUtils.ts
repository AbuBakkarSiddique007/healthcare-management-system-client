import jwt, { JwtPayload } from "jsonwebtoken"
import { setCookie } from "./cookieUtils"

const JWT_ACCESS_SECRET = process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN


export const getTokenSecondsRemaining = (token: string): number => {

    try {
        if (!token) {
            return 0
        } 

        const tokenPayload = JWT_ACCESS_SECRET ? jwt.verify(token, JWT_ACCESS_SECRET) as JwtPayload : jwt.decode(token) as jwt.JwtPayload

        if(tokenPayload && tokenPayload.exp) {
            return 0
        }

        const remainingTimeInSeconds = tokenPayload.exp as number - Math.floor(Date.now() / 1000)

        return remainingTimeInSeconds > 0 ? remainingTimeInSeconds : 0


        

    } catch (error) {
        console.error("Error decoding token:", error)
        return 0
        
    }

}

export const setTokenInCookies = async (
    name: string,
    token: string
) =>{
    const maxAgeInSeconds = getTokenSecondsRemaining(token)

    if (maxAgeInSeconds > 0) {
        await setCookie(name, token, maxAgeInSeconds)
    }
}