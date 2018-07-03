var express = require("express"),
    app     = express()
    
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("home")
});

app.get("/scales", function(req, res){
    res.render("scales")
});

app.get("/activities", function(req, res){
    res.render("activities")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
})