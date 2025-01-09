const express = require("express")
const zod = require ("zod");
const { User } = require("../db");
const JWT_SECRET=require("../config");
const jwt = require("jsonwebtoken")
const router = express.Router();

// defining schema 
const signupSchema = zod.object({
    username: zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    password:zod.string()
})

router.post("/signup", async(req,res)=>{
    const body = req.body;  // signup details
    const {success}=signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            msg:" email already used"
        })
    }

    //checking the existence of user
    const user = User.findOne({
        username:body.username
    })
    if(user._id){
        return res.json({
            msg:" email already used"
        })
    }


    const dbUser = await User.create(body);
    const token =jwt.sign({
     userId:dbUser._id
    },JWT_SECRET);

    res.json({
        msg:"User creaates succesfully",
        token:token
    })
})


module.exports=router;
