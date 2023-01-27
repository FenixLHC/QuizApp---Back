import { Request, Response, NextFunction } from "express";

const login = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.host)
    next()
};

export { login }