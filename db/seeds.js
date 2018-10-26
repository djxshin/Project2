const mongoose = require('./connections')
const User = require('../models/User.js')
const Album = require('../models/Album.js')
const Track = require('../models/Track.js')

const senditup = new Track({
    Track_Title: 'send it up',
    Purchased: true
})

const cool = new Track({
    Track_Title: 'the die',
    Purchased: true
})

const Kanye = new Album({
    Album_Title: 'Yeezus',
    Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Yeezus_album_cover.png/220px-Yeezus_album_cover.png',
    Purhcased: true,
    Favorite_Tracks: [senditup]
})

const lupe = new Album({
    Album_Title: 'The Cool',
    Image: 'https://childrebelsoldier.files.wordpress.com/2007/11/small1.jpg',
    Purhcased: true,
    Favorite_Tracks: [cool]
})

const DJ = new User({
    name: 'DJ',
    soundcloud: 'SoundCloud Rapper',
    apple_music: 'Steve Jobs RIP',
    favorite_genre: 'folk',
    location: 'Narnia',
    Favorite_Albums: [Kanye]
})

const Brady = new User({
    name: 'Cheat',
    soundcloud: 'I kiss my kids on the mouth',
    apple_music: 'Im Tom Brady',
    favorite_genre: 'Dubstep',
    location: 'Boston',
    Favorite_Albums: [lupe]
})

User.remove({})
    .then(()=> Album.remove({}))
    .then(()=> Track.remove({}))
    .then(() => Track.insertMany([senditup, cool]))
    .then(() => Album.insertMany([Kanye, lupe]))
    .then(() => DJ.save())
    .then(() => Brady.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())
    // it closes the terminal automatically back to regular terminal

