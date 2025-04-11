const express = require("express");
const {login} = require('../Controllers/authController');

const authRouter = express.Router();

authRouter.post('/login',login)

module.exports = authRouter;