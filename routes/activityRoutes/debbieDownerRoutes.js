var express     = require("express"),
    router      = express.Router(),
    app         = express(),
    User        = require("../../models/user"),
    middleware  = require("../../middleware")
    
router.get("/activities/debbieHome", function(req, res){
    var debbieExists = false
    if(req.isAuthenticated()){
        User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            if(foundUser.debbieDowner != null){
                debbieExists = true
            }
            res.render("activities/debbieActivity/debbieHome", {debbieExists: debbieExists})
        }
    })
    }else{
        res.render("activities/debbieActivity/debbieHome", {debbieExists: debbieExists})
    }
});

router.get("/activities/debbieStep2", function(req, res){
    res.render("activities/debbieActivity/debbieStep2");
});

router.get("/activities/debbieStep3", function(req, res){
    res.render("activities/debbieActivity/debbieStep3");
});

router.get("/activities/debbieStep4", function(req, res){
    res.render("activities/debbieActivity/debbieStep4");
});

router.post('/activities/debbiePOST', function(req, res){
    var debbieArray = req.body.debbieArray;
    var actionArray = req.body.actionArray;
    var newDebbie = {debbieArray: debbieArray, actionArray: actionArray}
    
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            foundUser.debbieDowner = newDebbie;
            foundUser.save(function(err, user){
                if(err){
                    console.log(err)
                }else{
                    console.log(user)
                }
            })
        }
    })
    res.render("home")
});

router.get("/activities/debbiePOST", function(req, res){
    res.render("activities/debbieActivity/debbiePost");
});

router.get("/activities/customDebbieDowners", function(req, res) {
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            res.render("activities/debbieActivity/customDebbieDowners", {debbieDowner: foundUser.debbieDowner})
        }
    })
})


module.exports = router