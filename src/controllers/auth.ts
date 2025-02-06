import { Request, RequestHandler, Response } from "express"

export const generateAuthLink: RequestHandler = (req, res) => {
    // generate auth link and send to user's email
    console.log(req.body)
    res.json({
        ok: true
    });
};

