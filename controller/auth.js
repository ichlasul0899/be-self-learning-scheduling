const { comparePassword, hashPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const User = require("../models/user")

class AuthController{
    static async signin(req,res) {
        const { username, password } = req.body
        try{
            const findUser = await User.findByUsername(username);

            if(findUser){
                const authenticate = comparePassword(password, findUser[0].password)
                if (authenticate){
                    const token = signToken({
                        id:findUser[0].id,
                        username
                    })
                
                    res.status(200).json({
                        message: 'Login Success,',
                        username: findUser[0].username,
                        token
                    })
                }
            }
        } catch(err){
            console.log(err)
            res.status(400).json({
                status_code:400,
                message: "Error Login"
            })
        }
    } 

    static async signup(req, res){

        const { username, password } = req.body 
        const new_pass = hashPassword(password)
        try {
          const create_user = await User.add(username, new_pass)
      
          if (create_user) {
            res.status(201).json({
              status_code: 201,
              message: "Register Success",
              data: {
                username,
                password: new_pass,
              }
            })
          }
        } catch (err) {
          console.log(err)
          res.status(400).json({
            status_code: 400,
            message: "Error Register"
          })
        }
    }
}

module.exports = AuthController