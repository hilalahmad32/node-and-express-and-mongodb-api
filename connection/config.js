import mongoose from 'mongoose'

// make a connection
mongoose.connect("mongodb://localhost:27017/crud_api").then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log(e)
})