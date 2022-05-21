const express = require('express')
const AuthController = require('../controller/auth')
const authRouter = express.Router()

authRouter.post('/signin', AuthController.signin)
authRouter.post('/signup', AuthController.signup)

module.exports = authRouter