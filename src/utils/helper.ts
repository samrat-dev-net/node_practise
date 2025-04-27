import { Request, RequestHandler, Response } from "express"

type ErrorResponseType = {
    res: Response
    message: string
    status: number
}

export const sendErrorResponse = ({ res, status, message }: ErrorResponseType) => {
    res.status(status).json({ message })
}

