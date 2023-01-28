import { Request, Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { deleteUserById, findUser, findUsers, insertUser, putUser } from "../services/users";
import { handleHttp } from "../utils/error.handle";


const getUsers = async (req:RequestExt, res:Response) => {
    try {
        const users = await findUsers()
        const response = users ? {code: 200, content: users} : {code: 404, content: 'Not found'}
        res.status(response.code).json({data: response.content, user: req.user}) //De esta manera podría tener una trazabilidad de cuál usuario insertó los datos en las DB
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORIES', error)
    }
}
const getUser = async (req:Request, res:Response) => {
    const {id} = req.params
    try {
        const user = await findUser(id)
        const response = user ? {code: 200, content: user} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY', error)
    }
}
const createUser = async (req:Request, res:Response) => {
    const {body} = req
    try {
        const newUser = await insertUser(body)
        const response = newUser ? {code: 200, content: newUser} : {code: 400, content: 'Something went wrong'}
        res.status(response.code).json(response.content)
    } catch (error:any) {
        handleHttp(res, 'ERROR_POST_CATEGORY', error)
    }
}
const updateUser = async ({params,body}:Request, res:Response) => {
    try {
        const updatedUser = await putUser(params.id,body)
        const response = updatedUser ? {code: 200, content: updatedUser} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY', error)
    }
}
const deleteUser = async (req:Request, res:Response) => {
    const {id} = req.params
    try {
        const deletedUser = await deleteUserById(id)
        const response = deletedUser ? {code: 200, content: deletedUser} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY', error)
    }
}

export { getUsers, getUser, createUser, updateUser, deleteUser}
