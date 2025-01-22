import {ApiError} from "../exceptions/ApiError";
import {NextFunction, Request, Response} from "express";


export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({success: false,message: err.message})
    }
    return res.status(500).json({success: false, message: 'Internal server error'})

};
