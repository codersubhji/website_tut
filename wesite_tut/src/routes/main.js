const { request, response } = require("express");
const express=require("express");
const { route } =require('express/lib/application');
const Contacts=require("../models/Contacts");
const Detail=require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
const Banner =require("../models/Banner");



const routes=express.Router();

routes.get("/", async (req,res)=>{
   const details =await Detail.findOne({"_id":"6387bb69136ebaa749bd9bee"})
   const slides = await Slider.find()
   const Services = await Service.find()
   const banner=await Banner.findOne({"-id":"639b0998351c760d67e613e6"}) 
    res.render("index",{
        details:details,
        slides:slides,
        Services:Services,
        banner:banner
    })
})

routes.get("/gallery", async (req,res)=>{
   const details =await Detail.findOne({"_id":"6387bb69136ebaa749bd9bee"})
    res.render("gallery",{
        details:details,
    })
})



routes.post("/process-contact-form",  (request,response)=>{
     console.log("form is submitted");
     console.log(request.body);
     // save the data in mongodb
     try{

         const data =  Contacts.create(request.body)
         console.log(data)
         response.redirect("/")
     }catch(e)
     {
        console.log(e)
        response.redirect("/")
     }
    
})


module.exports= routes
