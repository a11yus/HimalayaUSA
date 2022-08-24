const mongoose=require("mongoose");
module.exports=()=>{
    return mongoose.connect("mongodb+srv://nike:nike@cluster0.lpebv.mongodb.net/himalyan?retryWrites=true&w=majority")
}