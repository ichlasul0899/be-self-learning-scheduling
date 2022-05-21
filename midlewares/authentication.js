const { verifyToken } = require("../helpers/jwt");

async function authentication(req,res,next){
    const token = req.headers.token
    try{
        const payload = verifyToken(token);
        if(payload){
            req.user_id = payload.id
            next()
        }
    }catch(err){
        res.status(400).json({
            status_code:400,
            message: "Your not authenticated by system"
        })
    }
}

module.exports = authentication