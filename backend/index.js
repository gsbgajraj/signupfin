const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee") 

const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:["signupfront.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
)); 

mongoose.connect("mongodb+srv://login:18881888@login.xzdunbp.mongodb.net/?retryWrites=true&w=majority&appName=login")

app.post("/login", (req,res)=>{
    const {email,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user=> {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")

            }
        } else{ res.json("no record exist")}
    })
})

app.get("/", (req,res)=>{
    res.send("you contacted the root path")
 })

app.post("/register", (req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running at 3001")
})
