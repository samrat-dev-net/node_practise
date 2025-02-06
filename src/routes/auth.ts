import { generateAuthLink } from "@/controllers/auth";
import { NextFunction, Request, Response, Router } from "express";
import { z } from 'zod'

const authRouter = Router()
const schema = z.object({
    email: z.string({
        required_error: 'email is missing!'
    }).email('Invalid email address')
})
authRouter.post('/generate-link', (req: Request, res: Response, next: NextFunction): any => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
        console.log(JSON.stringify(result, null, 2));
        const err = result.error.flatten().fieldErrors
        return res.status(422).json({ err })
    }
    next();
}, generateAuthLink)

export default authRouter




