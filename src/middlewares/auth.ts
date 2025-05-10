import { sendErrorResponse } from "@/utils/helper";
import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { Schema } from "zod";
import { ObjectId } from 'mongoose';

export const isAuth: RequestHandler = (req, res, next) => {
    const authToken = req.cookies.authToken
    if (!authToken) {
        return sendErrorResponse({
            message: 'Unauthorized request!',
            status: 401,
            res
        })
    }
    const payload = jwt.verify(authToken, process.env.JWT_SECRET!) as {
        userId: String
    }
    console.log(payload)
    res.send()
}





