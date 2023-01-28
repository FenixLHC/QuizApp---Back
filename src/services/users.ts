import mongoose from "mongoose";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insertUser = async (user: User) => {
    const responseInsert = await UserModel.create(user)
    
    return responseInsert
};

const findUsers = async () => {
    const responseFind = await UserModel.find({})
    
    return responseFind
};

const findUser = async (id: string) => {
    const responseFind = await UserModel.findOne({_id: id})
    
    return responseFind
}

const putUser = async (id: string, data: User) => {
    const responseUpdate = await UserModel.findOneAndUpdate(
        {_id:id}, 
        data,
        {new: true}// Return new document
        )
    
    return responseUpdate
}

const deleteUserById = async (id: string) => {
    const responseDeleted = await UserModel.findOneAndDelete(
        {_id:id}
        )
    
    return responseDeleted
}

export {
    insertUser, 
    findUsers,
    findUser,
    putUser,
    deleteUserById
}