const express = require('express');
const{getCartByUser,modifyProductTocart} = require('../Controllers/cartController.js');
const{isLoggedIn} = require('../Validation/authValidator.js')

const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCartByUser);

cartRouter.post('/:operation/:productId',isLoggedIn,modifyProductTocart)


module.exports = cartRouter;