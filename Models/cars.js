var mongoose = require('mongoose');

var carsSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("cars",carsSchema)
