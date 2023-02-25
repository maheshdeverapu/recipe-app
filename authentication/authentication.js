const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Post = require("../models/post");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/test",(req,res)=>{
    res.send("test from router")
})
router.post("/signup",async(req,res)=>{
    try{
        console.log(req.body);
    const {userID,password,confirmPassword} = req.body;
    let user = await User.findOne({userID:req.body.userID});
    console.log(user)
    if(user){
        return res.status(400).json({
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
        let loginPassword = await bcrypt.compare(password,user.password);
        if(loginPassword === true){
            const token = jwt.sign({_id:user._id},process.env.SECRET_KEY);
            const {userName} = user;
            res.json({
                token,user
            })
        }
        else{
            return res.status(422).json({
                status:"Failed",
                error:"please verify user details and try again"
            })
        }
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
})


router.post("/addRecipe", async(req,res)=>{
    try{
        // const user = await User.findOne({_id:req.body.user._id})
        // console.log(req.body.addRecipeData)

        const post = await Post.create({
            title:req.body.addRecipeData.title,
            author:req.body.addRecipeData.author,
            image:req.body.addRecipeData.image,
            ingredients:req.body.addRecipeData.ingredients,
            directions:req.body.addRecipeData.directions

        });
      
        res.status(201).json({
            message:"recipe created",
            post  
        })          
    }catch(err){
        res.status(402).json({
            error:err.message
        })
    }
  })
  router.get("/getRecipe", async(req,res)=>{
    try{
        let recipe = await Post.find();
        if(!recipe){
            return res.json({
                error:"no recipe found, please add some recipe"
            })
        }
        res.json({
            recipe
        })
//         let user= await User.findById(req.params.id)
//    let books=user.books
//    var book_ids= books.map(function(id){return String(id)});
//    console.log(book_ids)
//    let data= await Posts.find({"_id":{$in:book_ids}})   
// //    console.log(data)
// //    res.json(data)
// //         const posts = await Posts.find();
//         res.json({
//             data
//         })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
  })
//   router.put("/updateRecipe/:id", async (req, res) => {
//     try {
//        let book= await Posts.findById(req.params.id)
//     //    console.log(book)
//     //    console.log(req.body.addBookData)
//        let update= await Posts.updateOne(
//         {_id:req.params.id},
//         {
//             $set:req.body.addBookData
//         }
//        )
//         res.json({
//             messgae:"book updated",
//             book
//         })
//     } catch (error) {
//         res.json({
//             error:error.message
//         })
// }

// })

// router.delete("/deleteRecipe/:id", async (req, res) => {
//     try {   
//         console.log(req.params.id);
//                 let book= await Posts.findOne({_id:req.params.id})
//                 // console.log(book)
//                 await book.remove()
//                 let user= await User.findById(req.params.id)
//                 let index=user.books.indexOf(req.params.id)
//                 user.books.splice(index,1)
//                 await user.save()
//                 // await book.save()
//                  res.json({
//                      messgae:"recipe deleted"
//                  })
//              } catch (error) {
//                  res.json({
//                      error:error.message
//                  })
//          }
//         })
 




module.exports = router;