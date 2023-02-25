const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config({path:"config.env"})
} 
mongoose.set('strictQuery', false);
const db = process.env.MONGODBURI;
// const db = "mongodb+srv://RecipeApp:jtIHph73EkswKBu5@cluster0.f6ixgkt.mongodb.net/?retryWrites=true&w=majority";
// console.log(db)
const connectDatabase = async()=>{
    try{
        await mongoose.connect(db);
        console.log("mongodb is connected")
    }catch(err){
        console.log(err.message);
        console.log("check your ENV VAR")
        process.exit(1);
    }
}
connectDatabase();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("testing")
})
app.use(require("./authentication/authentication"))
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')))
}
app.listen(port,()=>{console.log(`server is up at port number ${port}`)})