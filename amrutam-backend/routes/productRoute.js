const express = require('express')
const router = express.Router()

const {createProduct, getAllProduct, getProductById, deleteProduct} = require('../controller/productController.js')

router.post('/',   createProduct)
router.get("/",     getAllProduct)
router.get("/:productId",   getProductById)
router.delete("/:productId",   deleteProduct)

module.exports = router