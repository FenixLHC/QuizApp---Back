import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser} from "../controllers/users";
import { checkJwt } from "../middleware/session";


const router = Router()

router.get('/', checkJwt, getUsers)

router.get('/:id', checkJwt, getUser)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export {router};