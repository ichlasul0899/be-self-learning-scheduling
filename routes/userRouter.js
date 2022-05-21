const express = require('express')
const UserController = require('../controller/user')
const userRouter = express.Router()

userRouter.get('/', UserController.showUsers)

module.exports = userRouter