const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    author:{type:String,required:true},
    image:{type:String,required:true},
    ingredients:{type:String,required:true},
    directions:{type:String,required:true},
    userName:{type:String,required:true}
})
const Post = mongoose.model('post',postSchema);
module.exports = Post;