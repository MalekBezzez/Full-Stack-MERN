// coder  les methodes ici 
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utlis/createError.js";

export const register =async (req,res, next )=>{
    try{ 
        const hash = bcrypt.hashSync(req.body.password, 5) // pour hasher le mdp
        const newUser = new User({
            ...req.body,
            password: hash,

        });
    await newUser.save(); //pour ajouter a la base 
    res.status(201).send("User has been created")
    
}
    catch(err){
       next(err)
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        
        if (!user) {
            return next(createError(404, "User not found!"));
        }

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) {
            return next(createError(400, "Wrong password or username!"));
        }

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_KEY);

        const { password, ...info } = user._doc;
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(user);

    } catch (err) {
        next(err);
    }
}



export const logout =async (req,res)=>{
    res.clearCookie("accessToken",{
        sameSite:"none",
        secure: true,
    }).status(200).send("User has been logged out");

}