import express from 'express'
import Product from '../models/product.js';
const router=express.Router();

// get all products
router.get("/",async (req,res)=>{
    const products=await Product.find();
    res.send(products)
})

// post the porduct
router.post("/",async(req,res)=>{
    const {title,content,price}=req.body;
    const product=new Product({
        title:title,
        content:content,
        price:price
    });
    const result=await product.save();

    if(result){
        res.status(201).send("Data add successfully");
    }else{
        res.status(500).send("internal server error")
    }
});


// show by id the product api

router.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    const products=await Product.findById({_id:id});
    res.send(products);
})

// update the product api

router.put("/:id",async (req,res)=>{
    const {title,content,price}=req.body;
    const id=req.params.id;
    const products=await Product.findByIdAndUpdate({_id:id},{
        title:title,
        content:content,
        price:price
    });
    if(products){
        res.status(201).send("Data Update successfully");
    }else{
        res.status(500).send("internal server error")
    }
});


// delete data

router.delete("/:id",async (req,res)=>{
    const id=req.params.id;
    const products=await Product.findByIdAndDelete({_id:id});
    if(products){
        res.status(201).send("Data Delete successfully");
    }else{
        res.status(500).send("internal server error")
    }
})

export default router;