const  express=require("express");
const Oralcare=require("../models/Oralcare.model")

const router=express.Router();
router.get("",async (req,res)=>{
    try{
        const skincares=await Oralcare.find().lean().exec();
        return res.status(200).send(skincares)
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
   try{
       
       const skincare =await Oralcare.create(req.body);
       return res.status(200).send(skincare)
   } 
   catch(err){
    return res.status(500).send({message:err.message})
   }
});

router.get("/:id",async (req,res)=>{
    try{
        const user= await Oralcare.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


module.exports=router;