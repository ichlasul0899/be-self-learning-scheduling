const database = require("../connection/database")

class User{
    static findAll(){
        return database("users").select("id", "username")
    }

    static findByUsername(username){
        return database("users").where("username", username);
    }

    static add(username, password){
        return database("users").insert({username, password})
    }

}

module.exports = User