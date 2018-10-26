const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Album = new Schema({
    Album_Title: String,
    Image: String,
    Purhcased: Boolean,
    Favorite_Tracks: [{
        type: Schema.Types.ObjectId,
        ref: 'Track'
    }]
})

module.exports = mongoose.model('Album', Album)