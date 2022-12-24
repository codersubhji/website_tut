const mongoose=require("mongoose")
const Banner=mongoose.Schema({
    title:String,
    text:String
   
})

module.exports=mongoose.model("banner",Banner)