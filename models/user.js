const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userID:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true}
})
const User = mongoose.model('user',userSchema);
module.exports = User;
