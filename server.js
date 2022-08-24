const app=require("./index");
const connect =require("./config/db.js")

app.listen(5000,async function(){
   try{
     await connect();
     console.log("listening 5000")
   }
   catch(err){
       console.log(err)
   }
});