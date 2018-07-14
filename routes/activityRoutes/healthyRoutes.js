var express     = require("express"),
    router      = express.Router(),
    app         = express(),
    User        = require("../../models/user"),
    middleware  = require("../../middleware")
    

router.get("/activities/healthyHome", function(req, res){
    var healthyExists = false
    if(req.isAuthenticated()){
        User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            if(foundUser.healthyHabits != null){
                healthyExists = true
            }
            res.render("activities/healthyActivity/healthyHome", {healthyExists: healthyExists})
        }
    })
    }else{
        res.render("activities/healthyActivity/healthyHome", {healthyExists: healthyExists})
    }
});

router.get("/activities/healthyEatingRight", function(req, res){
    res.render("activities/healthyActivity/healthyEatingRight");
});

router.get("/activities/healthyMovingMore", function(req, res){
    res.render("activities/healthyActivity/healthyMovingMore");
});

router.get("/activities/healthySleepingBetter", function(req, res){
    res.render("activities/healthyActivity/healthySleepingBetter");
});

router.get("/activities/healthyTEST", function(req, res){
    res.render("activities/healthyActivity/healthyTEST");
});

router.post('/activities/healthyTEST', function(req, res){
    var eatingArray = req.body.arrayEating;
    var eatingChoices = req.body.choicesEating;
    var movingArray = req.body.arrayMoving;
    var movingChoices = req.body.choicesMoving;
    var sleepingArray = req.body.arraySleeping;
    var sleepingChoices = req.body.choicesSleeping
    var newHealthy = {eatingArray: eatingArray, eatingChoices: eatingChoices,
                      movingArray: movingArray, movingChoices: movingChoices,
                      sleepingArray: sleepingArray, sleepingChoices: sleepingChoices}
    console.log(newHealthy)
    
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            foundUser.healthyHabits = newHealthy;
            foundUser.save(function(err, user){
                if(err){
                    console.log(err)
                }else{
                }
            })
        }
    })
    res.render("home")
});

router.get("/activities/customHealthyHabits", function(req, res) {
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            // console.log(foundUser.journaling)
            res.render("activities/healthyActivity/customHealthyHabits", {healthyHabits: foundUser.healthyHabits})
        }
    })
})

module.exports = router