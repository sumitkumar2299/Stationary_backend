const express = require('express');
const{getCartByUser} = require('../Controllers/cartController.js');
const{isLoggedIn} = require('../Validation/authValidator.js')

const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCartByUser);


module.exports = cartRouter;