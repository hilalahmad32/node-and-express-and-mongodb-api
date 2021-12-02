import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});

const Product=mongoose.model("product",productSchema);

export default Product;