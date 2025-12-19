const express = require("express");
const { blogs } = require("./model/index");
const app = express()
app.set("view engine","ejs")

//database connection
require("./model/index")

app.use(express.json())//explicity use for form data
app.use(express.urlencoded({extended:true}))


app.get("/",async(req,res)=>{
const allblogs = await blogs.findAll()
console.log(allblogs)
    res.render("homepage",{blogs:allblogs})
    
})
app.get("/createform",(req,res)=>{
    res.render("createform")
})

app.post("/createform",async(req,res)=>{
   const title= req.body.title;
   const subTitle= req.body.subTitle;
   const description= req.body.description;

await blogs.create({
    title: title,
    subTitle: subTitle,
    description: description
})

    res.redirect("/")


    
}
    
)

app.get("/singlepage",(req,res)=>{
    res.render("Singlepage")
})

app.listen(3000,function(){
    console.log("server running 3000")
})