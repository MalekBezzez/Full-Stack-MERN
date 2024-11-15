import mongoose from 'mongoose';
const { Schema } = mongoose;

const gigSchema = new Schema({
    userId:{
        type:String,
        required:false,
        unique: true,

    },
    title:{
        type:String,
        required:true,
        

    },
    desc:{
        type:String,
        required:true,
        

    },
    totalStars:{
        type:Number,
        default:0,
        

    },
    starNumber:{
        type:Number,
        default:0,
        

    },
    cat:{
        type:String,
        required:true,
        

    },
    price:{
        type:Number, 
        required:true,
        
    },
    cover:{
        type:String ,
        required:true, 

    },
    images :{
        type:[String], // array of strings 
        required:false,
    },
    shortTitle:{
        type:String,
        required:true,
    }
    ,
    shortDesc:{
        type:String,
        required:true,
    },
    creationDate:{
        type:String,
        required:true,
    },
    dateOptions:{
        type:[String],
        required:true,
    }
    ,
    sales:{   
        type:Number, // number of sales 
        default:0
    }
    

    



  
  
},
{
    timestamps:true,

});
export default mongoose.model("Gig", gigSchema)