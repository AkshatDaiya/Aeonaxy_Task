const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    img:String,
    location:String,
    email: String,
    lookingFor:[String]
})

module.exports = mongoose.model('detailsModel',detailSchema)