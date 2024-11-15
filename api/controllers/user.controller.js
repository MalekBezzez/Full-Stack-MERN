// les methodes ici 

import User  from "../models/user.model.js";
import jwt  from "jsonwebtoken";
import createError from "../utlis/createError.js";


export const deleteUser= async(req,res, next)=>{
    const user  = await User.findById(req.params.id)

    
       if(req.userId !== user._id.toString()) //_id car dans la base nommé comme suit
    {
    return  
            next(createError(403,"You can delete only your account!"));
    } 
    await User.findByIdAndDelete(req.params.id)// pour recuperer l'id a partir de l'url
    res.status(200).send("deleted.")
    


};