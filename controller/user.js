const User = require("../models/user");

class UserController{
    static async showUsers(req,res){
        try{
            const users = await User.findAll();
            res.status(200).json({
                users
            })

        } catch (err){
            console.log('Error')
            res.status(400).json({
                message: "Error get user data"
            })
        }
        
    }
}

module.exports = UserController