const asyncHandler = require('express-async-handler')
const AmrutamProduct = require("../models/product.model");

//addProduct
const createProduct= asyncHandler (async (req, res)=>{
    try {
        const product = new AmrutamProduct(req.body)
        const savedProduct = await product.save()
        res.status(201).json({message: "New product is created.", savedProduct})
    } catch (error) {
         res.status(500).json({ error: "Failed to create new product.", error });
    }
})

//get product 
const getAllProduct = asyncHandler(async (req,res)=>{
try {
    const allProduct = await Product.find()
    if(allProduct){
 res.status(201).json(allProduct)
    }else{
         res.status(404).json({error: "Products not found"})
    }
   
} catch (error) {
    res.status(500).json({error: "Failed to fetch products", error})
}
})

//get product by ID
const getProductById = asyncHandler(async(req,res)=>{
    const {productId} = req.body
    try {
        const product = await AmrutamProduct.findById(productId)
        if(product){
            res.status(201).json(product)
        }else{
            res.status(404).json({error:"Product not found",})
        }
    } catch (error) {
          res.status(500).json({error: "Failed to fetch product", error})
    }
})

//delete product

const deleteProduct = asyncHandler(async(req,res)=>{
    const {productId} = req.body
    try {
        const product = await AmrutamProduct.findByIdAndDelete(productId)
        if(product){
            res.status(200).json({message: "Product delete successfully", product})
        }else{
            res.status(404).json({error:"Product not found",})
        }
    } catch (error) {
          res.status(500).json({error: "Failed to fetch product", error})
    }
})

module.exports = {createProduct, getAllProduct, getProductById, deleteProduct}