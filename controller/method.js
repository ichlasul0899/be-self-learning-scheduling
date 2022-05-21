const Method = require("../models/method")

class MethodController{

    static async showMethods(req,res){
        try{
            const methods = await Method.find()
            res.status(200).json({
                methods
            })
        } catch(err){
            console.log(err)
            res.status(400).json({
                msg: "Error show methods"
            })
        }
        
    }
}

module.exports = MethodController

