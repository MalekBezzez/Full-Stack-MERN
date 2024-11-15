import express from "express"
import{
    createGig,
    deleteGig,
    getGig,
    getGigs
} from "../controllers/gig.controller.js";
import {verifyToken} from "../middleware/jwt.js";


const router = express.Router();

router.post("/",verifyToken,createGig ); // we pass our function here 
router.delete("/:id",verifyToken,deleteGig ); // we pass our function here 
router.get("/sigle/:id",verifyToken,getGig ); // we pass our function here 
router.get("/",verifyToken,getGigs ); // we pass our function here 



export default router ;
