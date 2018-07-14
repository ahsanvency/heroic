var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose")

var UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    journaling: {},
    healthyHabits: {}
})

UserSchema.plugin(passportLocalMongoose); //This gives all the important fucntions and methods to the user model

module.exports = mongoose.model("User", UserSchema)