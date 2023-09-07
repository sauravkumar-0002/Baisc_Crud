require("dotenv").config();
const express =require("express");
const app=express();
const mysql=require("mysql2");
//require("./db/conn");
//const users=require("./models/userSchema");
const cors=require("cors");
const router=require("./routes/router");

const port=8001;

//middleware
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, (req,res)=>{
    console.log(`server is started at ${port}`);
});