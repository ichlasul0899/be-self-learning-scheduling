const database = require("../connection/database")


class Method{
    static find(){
        return database("methods")
    }
}

module.exports = Method