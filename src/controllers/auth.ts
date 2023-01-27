import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerCtrl = async ({body}: Request , res: Response) => {
    const response = await registerNewUser(body)
}

const loginCtrl = async (req: Request , res: Response) => {
    const response = await loginUser()
}

export {registerCtrl,loginCtrl}