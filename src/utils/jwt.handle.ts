import { sign, verify } from "jsonwebtoken"

const jwt_secret = process.env.SECRET_KEY_JWT || 'FuerzaInmaculada'

const generateToken =  (email:string) => {
    const jwt = sign({email},jwt_secret,{
        expiresIn: '24h'
    })
    return jwt
}

const verifyToken = (token:string) => {
    const decodedToken = verify(token, jwt_secret);
    return decodedToken
}

export {generateToken, verifyToken}