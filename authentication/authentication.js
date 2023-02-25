const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt=require("bcrypt");
router.get("/test",(req,res)=>{
    res.send("test from router")
})
router.post("/signup",async(req,res)=>{
    try{
    const {userID,password,confirmPassword} = req.body;
    const user = await User.find(userID);
    if(user){
        return res.json({
            error:"user already exists"
        })
    }
    bcrypt.hash(password,10,async(err,hash)=>{
        if(err){
            console.log(err)
        }
        user = await User.create({
            userID,
            password:hash,
            confirmPassword:hash
        })
        res.json({
            message:"successfully registered",
            user
        })
    })
}catch(err){
    res.status(400).json({
        error:err.message
    })
}
})

router.post("/signin",async(req,res)=>{
    try{
        const {userID,password}= req.body;
        const user = await User.findOne({userID:userID})
        if(!user){
            return res.status(422).json({
                error:"invalid user name or password"
            })
        }
    }
})
module.exports = router;