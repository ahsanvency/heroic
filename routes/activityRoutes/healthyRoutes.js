var express = require("express"),
    router  = express.Router(),
    app     = express()
    
router.get("/activities/healthyHome", function(req, res){
    res.render("activities/healthyActivity/healthyHome");
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




module.exports = router