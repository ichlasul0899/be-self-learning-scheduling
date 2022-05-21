const Activity = require("../models/activity")

class ActivityController {
    static async showUserActivity(req,res){
        const user_id = req.user_id
        const {month,method, search} = req.query

        try {
            
            const activities = await Activity.findUserActivity(user_id, search, month, method)
            res.status(200).json({
                activities
            })
        }catch(err){
            res.status(400).json({
                msg: "Error get Activity"
            })
        }
    }

    static async addUserActivity(req,res){
        const {title, method, start_date, end_date} = req.body
        const user = req.user_id
        
        try {
            const createActivity = await Activity.create(title, user, method, start_date, end_date)
            res.status(200).json({
                msg: "New User Activity Created"
            })
        } catch(err){
            console.log(err)
            res.status(400).json({
                msg: "Error Add User Activity"
            })
        }
    }

    static async updateActivity(req,res){
        const id = req.params.id
        const user = req.user_id
        const {title, start_date, end_date, method} = req.body
        
        try{

            if (!title && !start_date && !end_date && !method){
                res.status(404).json({ msg: "You are missing information" });
            } else {
                const detailActivity = await Activity.findById(id)
                const authorize = (detailActivity[0].user === user ? true : false)
                if (authorize){
                    const updateActivity = await Activity.update(id, title, method, start_date, end_date)
                    res.status(200).json({
                        msg: "Activity updated",
                        authorize,
                    })
                } else{
                    console.log("Your not authorize!")
                    res.status(400).json({
                        msg: "Your not authorize!"
                    })
                }
                
            }
        } catch(err){
            res.status(400).json({
                msg: "Error update activity"
            })
        }
    }

    static async deleteActivity(req,res){
        // Soft delete
        const id = req.params.id
        const user = req.user_id

        try {
            const detailActivity = await Activity.findById(id)
            const authorize = (detailActivity[0].user === user ? true : false)
            if (authorize){
                const deleting = await Activity.softDelete(id)
                res.status(200).json({
                    msg: "Activity Deleted",
                    authorize
                });
            } else{
                console.log("Your not authorize!")
                res.status(400).json({
                    msg: "Your not authorize!"
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({ err: "Error in deleting user" });
        }
    }
}

module.exports = ActivityController