const express = require('express');

const {getCartbyid} = require('../Controllers/cartController')

const cartRouter = express.Router();

cartRouter.get('/:id',getCartbyid);

module.exports = cartRouter;