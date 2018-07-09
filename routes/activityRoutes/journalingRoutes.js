var express     = require("express"),
    router      = express.Router(),
    app         = express(),
    User        = require("../../models/user"),
    Journaling  = require("../../models/journaling"),
    middleware = require("../../middleware")
    
    
router.get("/activities/journalingHome", function(req, res){
    var journalingExists = false
    if(req.isAuthenticated()){
        User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            if(foundUser.journaling != null){
                journalingExists = true
            }
            res.render("activities/journalingActivity/journalingHome", {journalingExists: journalingExists})
        }
    })
    }else{
        res.render("activities/journalingActivity/journalingHome", {journalingExists: journalingExists})
    }
});

router.get("/activities/journalingPage", function(req, res){
    res.render("activities/journalingActivity/journalingPage");
})

router.get("/activities/personalizeJournal", function(req, res) {
    res.render("activities/journalingActivity/personalizeJournal");
});

router.get("/activities/myJournal", function(req, res) {
    res.render("activities/journalingActivity/myJournal");
})

router.post('/activities/journalTEST', function(req, res) {
    var journalingArray = req.body.arrayJournaling;
    var healthyArray = req.body.arrayHealthy;
    var newJournaling = {journalingArray: journalingArray, healthyArray: healthyArray};
    
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            foundUser.journaling = newJournaling;
            console.log(foundUser.journaling)
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

router.get("/activities/customJournal", function(req, res) {
    User.findById(req.user._id, function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            // console.log(foundUser.journaling)
            res.render("activities/journalingActivity/customJournal", {journaling: foundUser.journaling})
        }
    })
})


module.exports = router