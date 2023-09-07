const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },

    email:{
        type:String,
        required: true,
        unique: true
    },

    age:{
        type:String,
        required:true
    },
    
    work:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    }


});

const users=new mongoose.model("users",userSchema);



module.export=users;