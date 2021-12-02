import express from 'express'
const app=express();
const port = process.env.PORT || 5000;
import './connection/config.js'
import router from './routes/product.js';

// middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// product api routes
app.use("/products",router)

// listen port
app.listen(port,()=>{
    console.log("server is runing....")
})