import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    gigId:{
        type:String,
        required:true,
        
    },
    title:{
        type:String,
        required:true,
        

    },
    price:{
        type:Number,
        required:true,
        

    },
    buyerId:{
        type:String, 
        required:true ,
        
    },
    dateSelected :{
        type:String ,
        required:true, 

    },
    registrationDate :{
        type:String, 
        default:true,
    },
    

  
  
},
{
    timestamps:true,

});
export default mongoose.model("Order", orderSchema)