const { request, response } = require("express");
const express = require("express");
const hbs=require("hbs")
const bodyParser=require('body-parser')
const app = express()
const mongoose=require("mongoose")
const routes = require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const Banner=require("./models/Banner")

//  /static/css/style.css
//  /static/images/pic.jpg

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))
app.use('/',routes)

// (template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

// db connection
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected");



    // Banner.create([
    //     {
    //        title:"Subhash Ji",
    //        text:"I am subhash kumar from ftp and i m so lucky you know what because of my strength is very strong before 10 years and which works choose that why i m good from  to catch every information."
    //     }
    // ])
// Service.create([
//     {
//         icon:'fa-solid fa-file',
//         title:'Provide Best Courses',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.google.com',
//         link:'Check'
//     },

//     {
//         icon:'fa-solid fa-envelope',
//         title:'Provide Best Courses',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.google.com',
//         link:'Check'
//     },

//     {
//         icon:'fa-solid fa-file',
//         title:'Provide Best Courses',
//         description:'We provide best courses that helps our student in learning and in placement',
//         linkText:'https://www.google.com',
//         link:'Check'
//     }
// ])



// Slider.create([
//     {
//     title: 'Leran Java ',
//     subtitle:'Java is a Most important language',
//     imageUrl:"/static/images/slider2.jpg"
    
//     },
//     {
//     title: 'Learn Python ',
//     subtitle:'Java is a Most important language',
//     imageUrl:"/static/images/slider3.jpg"
    
//      },
//      {
//     title: 'Leran JavaScript ',
//     subtitle:'Java is a Most important language',
//     imageUrl:"/static/images/slider4.jpg"
    
//     }
// ])    
    // Detail.create({
    //     brandName:"Information techknowlodgy",
    //     brandIconUrl:"/public/images/logo.jpg",
    //     links:[
    //         {
    //             label:"home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
})


app.listen(process.env.PORT | 5556,()=>{
    console.log("server started");
})