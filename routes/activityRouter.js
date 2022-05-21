const express = require("express")
const ActivityController = require("../controller/activity")
const activityRouter = express.Router()

//Crud
activityRouter.route('/')
.get(ActivityController.showUserActivity)
.post(ActivityController.addUserActivity)

activityRouter.route('/:id')
.put(ActivityController.updateActivity)
.delete(ActivityController.deleteActivity)

module.exports = activityRouter