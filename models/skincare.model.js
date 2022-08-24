const mongoose=require("mongoose")

const healthSchema =new mongoose.Schema(
    {
        Name:{type:String,required:true},
        Price:{type:Number,required:true},
        Description:{type:String,required:true},
        Image1:{type:String,required:true},
        Image2:{type:String,required:true},
    },{
        timestamps:true,
    }
)

module.exports=mongoose.model("health",healthSchema)