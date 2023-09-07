const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");

const app = express();


//const users=require("../models/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect")
// });

// router.post("/register",async(req,res,next)=>{
//     //console.log(req.body);
//     const {name,email,age,work,description}=req.body;
//     if(!name || !email || !age || !work ||!description){
//         res.status(404).send("please fill the data")
//     }

//     try{

//         const preuser=await users.findOne({email:email});
//         console.log(preuser);

//         if(preuser){
//             req.status(404).send("this user is  already present")
//         }else{

//             const adduser=new users({name,email,age,work,description});
//             await adduser.save();
//             res.status(201).json(adduser);
//             console.log(adduser);
//         }


//     }catch(error){
//         res.status(404).send(error)

//     }


//     next();

// })



//register user

app.use(express.json());

router.post("/register", (req, res) => {

    //console.log(req.body);

    const { name, email, age, gender, work, description } = req.body;


    conn.query("INSERT INTO users SET ?", {name, email, age, gender, work, description}, (err, result) => {
        if (err) {
            console.log("err" + err);
        }
        else{
            res.status(201).json(req.body);
        }
    })

});




//get user data
router.get("/getusers",(req,res)=>{
    conn.query("Select * from users",(err,result)=>{

        if(err){
            res.status(422).json("no data found");
        }else{
            res.status(201).json(result);
        }
    })
})

module.exports = router;