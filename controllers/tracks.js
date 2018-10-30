const Track = require('../models/Track')

const tracksController = {
    index: (req, res) => {
        Track.find({}).populate('tracks')
            .then((tracks) => {
                res.render('tracks/index', {
                    tracks: tracks

                })
            })
    },
}
module.exports = tracksController