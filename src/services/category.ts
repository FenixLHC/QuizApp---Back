import mongoose from "mongoose";
import { Category } from "../interfaces/category.interface";
import CategoryModel from "../models/category";

const insertCategory = async (category: Category) => {
    const responseInsert = await CategoryModel.create(category)
    
    return responseInsert
};

const findCategories = async () => {
    const responseFind = await CategoryModel.find({})
    
    return responseFind
};

const findCategory = async (id: string) => {
    const responseFind = await CategoryModel.findOne({_id: id})
    
    return responseFind
}

const putCategory = async (id: string, data: Category) => {
    const responseUpdate = await CategoryModel.findOneAndUpdate(
        {_id:id}, 
        data,
        {new: true}
        )
    
    return responseUpdate
}

const deleteCategoryById = async (id: string) => {
    const responseDeleted = await CategoryModel.findOneAndDelete(
        {_id:id}
        )
    
    return responseDeleted
}

export {
    insertCategory, 
    findCategories,
    findCategory,
    putCategory,
    deleteCategoryById
}