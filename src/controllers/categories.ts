import { Request, Response } from "express";
import { deleteCategoryById, findCategories, findCategory, insertCategory, putCategory } from "../services/category";
import { handleHttp } from "../utils/error.handle";

const getCategories = async (req:Request, res:Response) => {
    try {
        const categories = await findCategories()
        const response = categories ? {code: 200, content: categories} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORIES', error)
    }
}

const getCategory = async (req:Request, res:Response) => {
    const {id} = req.params
    console.log(id)
    try {
        const category = await findCategory(id)
        const response = category ? {code: 200, content: category} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_CATEGORY', error)
    }
}

const createCategory = async (req:Request, res:Response) => {
    const {body} = req
    try {
        const newCategory = await insertCategory(body)
        const response = newCategory ? {code: 200, content: newCategory} : {code: 400, content: 'Something went wrong'}
        res.status(response.code).json(response.content)
    } catch (error:any) {
        handleHttp(res, 'ERROR_POST_CATEGORY', error)
    }
}

const updateCategory = async ({params,body}:Request, res:Response) => {
    try {
        const updatedCategory = await putCategory(params.id,body)
        const response = updatedCategory ? {code: 200, content: updatedCategory} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_CATEGORY', error)
    }
}

const deleteCategory = async (req:Request, res:Response) => {
    const {id} = req.params
    try {
        const deletedCategory = await deleteCategoryById(id)
        const response = deletedCategory ? {code: 200, content: deletedCategory} : {code: 404, content: 'Not found'}
        res.status(response.code).json(response.content)
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_CATEGORY', error)
    }
}

export {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory

}