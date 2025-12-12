const express = require("express");
const app = express()
app.set("view engine","ejs")

//database connection
require("./model/index")

app.use(express.json())//explicity use for form data
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("homepage")
})
app.get("/createform",(req,res)=>{
    res.render("createform")
})

app.post("/createform",(req,res)=>{
    console.log(req.body)
    res.send("form submitted successfully")
    
}
    
)

app.listen(3000,function(){
    console.log("server running 3000")
})