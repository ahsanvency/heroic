var express = require("express"),
    router  = express.Router(),
    app     = express()
    
    
router.get("/activities", function(req, res){
    res.render("activities/activitiesHome")
});


module.exports = router