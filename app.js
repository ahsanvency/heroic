var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user")
    
var activityRoutes      = require("./routes/activityRoutes/activitiesHome"),
    journalingRoutes    = require("./routes/activityRoutes/journalingRoutes"),
    authRoutes          = require("./routes/auth")
    


mongoose.connect("mongodb://localhost:27017/heroicDB", { useNewUrlParser: true })
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//Connecting routes from other files
app.use(activityRoutes);
app.use(journalingRoutes);
app.use(authRoutes);




//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Steve Jobs is the greatest person that ever lived",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //method that comes with passport local mongoose we can use to authenticate users
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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