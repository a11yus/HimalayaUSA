const express=require("express");
const cors=require("cors");
const productcontroller=require("./controller/product.controller");
const skincarecontroller=require("./controller/skincare.controller")
const oralcarecontroller=require("./controller/oralcare.controller")
const bodycarecontroller=require("./controller/bodycare.controller");


 const app=express();
 app.use(cors());
 app.use(express.json());
 app.use("/oralcare",oralcarecontroller);
 app.use("/bodycare",bodycarecontroller);
 app.use("/products",productcontroller);
 app.use("/health",skincarecontroller);
 module.exports=app;