const mongoose = require('mongoose');

const crudeSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    
})
const Crude = mongoose.model('crude', crudeSchema)

module.exports = Crude;