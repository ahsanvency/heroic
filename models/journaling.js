var mongoose    = require("mongoose")


var journalingSchema = new mongoose.Schema({
    author: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    journalingArray: [],
    healthyArray: []
    
})