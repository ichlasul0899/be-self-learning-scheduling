const bcrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bcrypt.genSaltSync(9)
    const hash = bcrypt.hashSync(password,salt)
    return hash
}

function comparePassword(inputanPassword,databasePassword){
    return bcrypt.compareSync(inputanPassword,databasePassword)
}

module.exports = {
    hashPassword,
    comparePassword
}