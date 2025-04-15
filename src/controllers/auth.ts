import { Request, RequestHandler, Response } from "express"
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { hashSync, compareSync } from "bcrypt";
import VerificationTokenModel from '@/models/verificationToken';
import UserModel from "@/models/user";

export const generateAuthLink: RequestHandler = async (req, res) => {
    /* 1. Generate Unique token for every users
    2. Store that token securely inside the database
    so that we can validate it in future.
    3. Create a link which include that sec0ure token and user information
    4. Send that link to users email address.
    5. Notify user to look inside the email to get the login link*/
    const { email } = req.body
    let user = await UserModel.findOne({ email })
    if (!user) {
        user = await UserModel.create({
            email
        })
    }

    const userId = user._id.toString()
    await VerificationTokenModel.findOneAndDelete({ userId })
    const randomToken = crypto.randomBytes(36).toString("hex")
    await VerificationTokenModel.create<{ userId: string }>({
        userId,
        token: randomToken,
    })

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "d868aafb9d2cf2",
            pass: "675c1a5d1b4d61"
        }
    });
    const link = `http://localhost:3000/verify?token=${randomToken}&userId=${userId}`
    await transport.sendMail({
        to: user.email,
        from: 'verification@myapp.com',
        subject: 'Auth verification',
        html: `<div>
                <p>Please click on <a href="${link}">this link</a> to verify your account.</p>
            </div>`
    })
    res.json({
        message: 'Please check your email for link'
    });
};

