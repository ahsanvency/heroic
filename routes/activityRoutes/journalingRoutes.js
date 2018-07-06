var express = require("express"),
    router  = express.Router(),
    app     = express()
    
router.get("/activities/journalingHome", function(req, res){
    res.render("activities/journalingActivity/journalingHome");
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

module.exports = router