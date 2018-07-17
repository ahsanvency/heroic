var express                 = require("express"), //Setting up the basic express app
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),  //Added mongoose in right here
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    User                    = require("./models/user")
    
var activityRoutes      = require("./routes/activityRoutes/activitiesHome"),
    journalingRoutes    = require("./routes/activityRoutes/journalingRoutes"),
    healthyRoutes       = require("./routes/activityRoutes/healthyRoutes"),
    debbieDownerRoutes       = require("./routes/activityRoutes/debbieDownerRoutes"),
    authRoutes          = require("./routes/auth")
    
// console.log(process.env.DATABASEURL)
// mongoose.connect("mongodb://localhost:27017/heroicDB", { useNewUrlParser: true })
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true })
// mongoose.connect("mongodb://av:password1@ds127851.mlab.com:27851/heroic");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));



//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Steve Jobs is the greatest person that ever lived",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})
//Connecting routes from other files
app.use(activityRoutes);
app.use(journalingRoutes);
app.use(healthyRoutes);
app.use(debbieDownerRoutes);
app.use(authRoutes);




app.get("/scales", function(req, res){
    res.render("scales")
});

app.get("/comments", function(req, res){
    res.render("comments")
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started")
})