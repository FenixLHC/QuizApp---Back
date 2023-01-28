import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email, password, name}: User) => {
    const exist = await UserModel.findOne({email})
    if (exist) return "Already exist"
    const passwordHash = await encrypt(password)
    const newUser = await UserModel.create({email, password: passwordHash, name})
    return newUser
}

const loginUser = async ({email, password}: Auth) => {
    const user = await UserModel.findOne({email})
    if (user) {
        const validate = await verified(password,user.password)
        const token = generateToken(user.email)
        return validate ? token : 'INCORRECT_PASSWORD'
    }
    else throw new Error('Something went wrong')
}

export {registerNewUser, loginUser}