var express     = require("express"),
    router      = express.Router(),
    app         = express(),
    User        = require("../../models/user"),
    middleware  = require("../../middleware")
    
router.get("/activities/valuesHome", function(req, res){
    var valuesExists = false
    if(req.isAuthenticated()){
        User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            if(foundUser.valuesDowner != null){
                valuesExists = true
            }
            res.render("activities/valuesActivity/valuesHome", {valuesExists: valuesExists})
        }
    })
    }else{
        res.render("activities/valuesActivity/valuesHome", {valuesExists: valuesExists})
    }
});

router.get("/activities/valuesIdentifyHeros", function(req, res){
    res.render("activities/valuesActivity/identifyingHeros")
});

router.get("/activities/herosValues", function(req, res){
    res.render("activities/valuesActivity/herosValues")
});

router.get("/activities/chooseValues", function(req, res){
    res.render("activities/valuesActivity/chooseValues")
});

router.get("/activities/orgValues", function(req, res){
    res.render("activities/valuesActivity/orgValues")
});

router.get("/activities/valuesComparison", function(req, res){
    res.render("activities/valuesActivity/valuesComparison")
});

module.exports = router