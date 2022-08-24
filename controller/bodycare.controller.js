const  express=require("express");
const Bodycare=require("../models/Bodycare.model");

const router=express.Router();
router.get("",async (req,res)=>{
    try{
        const bodycare=await Bodycare.find().lean().exec();
        return res.status(200).send(bodycare)
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
   try{
       
       const product =await Bodycare.create(req.body);
       return res.status(200).send(product)
   } 
   catch(err){
    return res.status(500).send({message:err.message})
   }
});

router.get("/:id",async (req,res)=>{
    try{
        const user= await Bodycare.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})
module.exports =router;