const mongoose = require('mongoose');

const RegSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('regModel', RegSchema)