var mongoose    = require("mongoose")


var journalingSchema = new mongoose.Schema({
    journalingArray: [],
    healthyArray: []
    
})

module.exports = mongoose.model("Journaling", journalingSchema)
