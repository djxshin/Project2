const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    soundcloud: String,
    apple_music: String,
    favorite_genre: String,
    location: String,
    Favorite_Albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
})


module.exports = mongoose.model('User', User)