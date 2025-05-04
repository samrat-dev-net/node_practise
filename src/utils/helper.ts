import { UserDoc } from "@/models/user"
import { Request, RequestHandler, Response } from "express"

type ErrorResponseType = {
    res: Response
    message: string
    status: number
}
export const sendErrorResponse = ({ res, status, message }: ErrorResponseType) => {
    res.status(status).json({ message })
}
export const formatUserProfile = (user: UserDoc) => {
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
    }
}

