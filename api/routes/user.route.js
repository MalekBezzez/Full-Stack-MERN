import express from "express"
import {deleteUser} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";


const router = express.Router();

router.delete("/:id",verifyToken, deleteUser ) // we pass our function here 




export default router ;
