var express         = require("express"),
    router          = express.Router(),
    passport        = require("passport"),
    User            = require(".././models/user")
    
    
router.get("/register", function(req, res){
    res.render("authentication/register")
});

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err)
            return res.render("register")
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/")
        })
        console.log(user)
    }) //
})


router.get("/login", function(req, res){
    res.render("authentication/login")
});

router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res) {
        console.log("IT WORKED")
});


module.exports = router