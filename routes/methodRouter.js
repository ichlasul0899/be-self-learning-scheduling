const express = require('express');
const MethodController = require('../controller/method');
const methodRouter = express.Router()

methodRouter.get('/', MethodController.showMethods)

module.exports = methodRouter;