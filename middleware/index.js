//all the middleware goes here
var User            = require("../models/user"),
    middlewareObj   = {};


middlewareObj.isLoggedIn = function(req, res, next){
    //middle ware
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that.")
    res.redirect("/login")
}

module.exports = middlewareObj