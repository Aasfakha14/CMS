const express = require("express");
const { blogs } = require("./model/index");
const { where } = require("sequelize");
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

app.get("/singlepage/:id",async(req,res)=>{
    const id = req.params.id
    const data = await blogs.findAll({
        where:{
            id:id
        }
})
    
    res.render("Singlepage",{data:data})
})
app.get("/delete/:id",async(req,res)=>{
    const id= req.params.id
    await blogs.destroy({
        where:{
            id:id
        }
    })
    res.redirect("/")
})
app.post("/editPage/:id",async(req,res)=>{
    const id= req.params.id
    const title= req.body.title
    const description= req.body.description
    const subTitle= req.body.subTitle

    await blogs.update({
        title:title,
        description:description,
        subTitle:subTitle
    }, {
        where: {
            id:id
        }
    })
    res.redirect("/")
})



app.get("/edit/:id",async(req,res)=>{
    const id = req.params.id
  const data = await blogs.findAll({
        where: {
            id:id
        }
    })
    res.render("editpage", {data:data})
})

app.listen(3000,function(){
    console.log("server running 3000")
})