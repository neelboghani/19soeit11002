var mongoose = require('mongoose');

var carsSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("cars",carsSchema)
