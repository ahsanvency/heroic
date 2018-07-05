var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose")
    
    mongoose.connect("mongodb://localhost/heroicDB")
    
var activityRoutes = require("./routes/activityRoutes/activitiesHome")
var journalingRoutes = require("./routes/activityRoutes/journalingRoutes")

app.use(activityRoutes);
app.use(journalingRoutes);
    
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home")
});

app.get("/scales", function(req, res){
    res.render("scales")
});

app.get("/comments", function(req, res){
    res.render("comments")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
})