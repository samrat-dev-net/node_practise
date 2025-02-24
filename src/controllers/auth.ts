import { Request, RequestHandler, Response } from "express"
import crypto from 'crypto'

export const generateAuthLink: RequestHandler = (req, res) => {
    /*
    1. Generate Unique token for every users
    2. Store that token securely inside the database
    so that we can validate it in future.
    3. Create a link which include that sec0ure token and user information
    4. Send that link to users email address.
    5. Notify user to look inside the email to get the login link
    */

    const randomToken = crypto.randomBytes(36).toString("hex")

    console.log(req.body)
    res.json({
        ok: true,
        randomToken
    });
};

