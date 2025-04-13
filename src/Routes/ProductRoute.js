const express = require('express');
const{addProduct,getProduct,deleteProduct} = require('../Controllers/productController');
const uploader = require('../Middleware/multerMiddleware');
const {isLoggedIn, isAdmin} = require('../Validation/authValidator')


const productRouter = express.Router();
productRouter.post( 
    '/',
    isLoggedIn,
    isAdmin,
    uploader.single('productImage'),
    addProduct
);
productRouter.get('/:id',getProduct);
productRouter.delete('/:id',deleteProduct);

module.exports = productRouter;