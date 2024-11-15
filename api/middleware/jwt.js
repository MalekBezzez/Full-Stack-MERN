import jwt from "jsonwebtoken";
import createError from "../utlis/createError.js";

export const verifyToken = (req,res, next )=>{
    const token = req.cookies.accessToken; 
    if(!token) return // pour bloquer user de faire delete 
    next(createError(401,"You are not authenticated!"));
    jwt.verify(token,process.env.JWT_KEY, async(err,payload)=>{
        if (err) return 
        next(createError(403,"Token is not valid! "));
        req.userId = payload.id;
        req.isAdmin = payload.isAdmin;
        next()
     });
}