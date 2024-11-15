import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true,

    },
    email:{
        type:String,
        
        required:true,
        unique: true,

    },
    password:{
        type:String,
        required:true,
        

    },
    img:{
        type:String, // on va stocker l'url de l'image en cas ou
        required:false ,
        
    },
    phonenumber :{
        type:String ,
        required:true, 

    },
    isAdmin :{
        type:Boolean, 
        default:false,
    },
    isActive:{
        type:Boolean,
        default:false,
    }

  
  
},
{
    timestamps:true,

});
export default mongoose.model("User", userSchema)