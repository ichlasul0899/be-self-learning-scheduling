const express = require('express')
const activityRouter = require('./activityRouter')
const authRouter = require('./authRouter')
const methodRouter = require('./methodRouter')
const userRouter = require('./userRouter')
const router = express.Router()
const authentication = require('../midlewares/authentication')
router.get('/', (_,res) => {
    res.send("Hello Worl, By Ichlasul Amal")
})

router.use('/auth', authRouter)
router.use('/methods', methodRouter)
router.use(authentication)
router.use('/users', userRouter)
router.use('/activities', activityRouter)


module.exports = router;