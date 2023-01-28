import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async (req:RequestExt, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : ''
        if (token) {
            const decodedToken = verifyToken(token)
            console.log(decodedToken)
            if (decodedToken) {
                req.user = decodedToken // Me permite personalizar las respuestas ya que tengo en el req los datos del usuario que se esta logueando
                next()
            }
        } else {
            res.status(409).json('Peticion no valida, faltan credenciales')
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('SESSION_NOT_VALID')
    }
}

export {checkJwt}