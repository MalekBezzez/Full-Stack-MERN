import express from "express"
import { register, login, logout } from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register", register) // we pass our function here 
router.post("/login", login) // we pass our function here 
router.post("/logout", logout) // we pass our function here 



export default router ;
