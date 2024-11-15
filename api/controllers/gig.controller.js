// les methodes ici 
import Gig from "../models/gig.model.js";
import createError from "../utlis/createError.js";

export const createGig = async(req,res, next)=>{
if(!req.isAdmin) return  next(createError(403, "Only Admin  can create a gig" ));
const newGig = new Gig({
    userId : req.userId,
    ...req.body
})

try{
const savedGig = await newGig.save();
res.status(201).json(savedGig);
}
catch(err){
    next(err)
}
}

export const deleteGig = async(req,res, next)=>{


}

export const getGig = async(req,res, next)=>{


}

export const getGigs = async(req,res, next)=>{


}