const express = require('express');
const { isLoggedIn } = require('../Validation/authValidator');
const { createNewOrder } = require('../Repository/OrderRepository');


const orderRouter = express.Router();

orderRouter.post('/',isLoggedIn,createNewOrder);

module.exports = orderRouter;