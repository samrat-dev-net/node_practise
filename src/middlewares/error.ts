import { Request, RequestHandler, Response } from "express"
import { ErrorRequestHandler } from "express"

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    res.status(500).json({ error: error.message })
}

