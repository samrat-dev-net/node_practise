import { sendErrorResponse } from "@/utils/helper";
import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { Schema } from "zod";
import { ObjectId } from 'mongoose';
import UserModel from "@/models/user";

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
                name?: string;
                email: string;
                role: 'user' | 'author';
            }
        }
    }
}
export const isAuth: RequestHandler = async (req, res, next) => {
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
    const user = await UserModel.findById(payload.userId)
    if (!user) {
        return sendErrorResponse({
            message: "Unauthorized request user not found",
            status: 401,
            res
        })
    }
    req.user = {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
    };
    next()
}





