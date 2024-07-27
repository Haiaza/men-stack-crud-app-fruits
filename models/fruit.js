// Creating the model

//* Step1 The Schema
// import the library that has the blueprint

const mongoose = require('mongoose')
// make a schema for the model
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
})
//* Step2 The model
// the model is defined by our Keyword, and given schematics
const Fruit = mongoose.model("Fruit", fruitSchema)
// exporting the model
module.exports = Fruit