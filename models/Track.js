const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Track = new Schema({
    Track_Title: String,
    Purchased: Boolean
})

module.exports = mongoose.model('Track', Track)