const express = require("express");
const app= express();
const cors = require("cors");
const dotenv=require("dotenv");
dotenv.config();
const port=8080;
const dbuser=require("./services/dbconnect");
app.use(cors());
app.use(express.json());

//apis
app.get("/",(req,res)=>{
    res.send("Hi from Express")
})
app.get("/Himanshu",(req,res)=>{
    res.send("Hi from Himanshu")
})
app.post('/register',dbuser.createUser)
app.get('/getuser',dbuser.getUser)
app.post('/getUserById/:id',dbuser.getUserById)
app.put('/updateUserName/:id',dbuser.updateUserName)
app.delete('/deleteUser/:id',dbuser.deleteUser)
app.post('/login',dbuser.loginUser)


app.listen(port,()=> console.log(`server is running on the ${port}`))