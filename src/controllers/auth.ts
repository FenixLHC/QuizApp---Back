import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const registerCtrl = async ({body}: Request , res: Response) => {
    try {
        const newUser = await registerNewUser(body)
        const response = newUser ? {code: 200, content: newUser} : {code: 400, content: 'Something went wrong'}
        res.status(response.code).json(response.content)
    } catch (error:any) {
        handleHttp(res, 'ERROR_REGISTER_USER', error)
    }
}

const loginCtrl = async ({body}: Request , res: Response) => {
    
    try {
        const user = await loginUser(body)
        const response = user ? {code: 200, content: user} : {code: 403, content: 'Something went wrong'}
        res.status(response.code).json(response.content)
    } catch (error:any) {
        handleHttp(res, 'ERROR_LOGIN_USER', error)
    }
}

export {registerCtrl,loginCtrl}