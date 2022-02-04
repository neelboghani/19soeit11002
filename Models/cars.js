var mongoose = require('mongoose');

var carsSchema = mongoose.Schema({
    name:String,
    prise:Number
})

module.exports = mongoose.model("cars",carsSchema)
