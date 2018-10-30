const Album = require('../models/Album')
const User= require('../models/User')

const albumsController = {
    index: (req, res) => {
        Album.find().then((albums)  => {
                res.render('albums/index', {
                    albums: albums

                })
            }) 
        },
    new: (req, res) => {
        res.render('albums/new')
    },
    show: (req, res) => {
        const albumsId = req.params.albumsId
        Album.findById(albumsId).populate('tracks')
            .then((albums) => {
                
                res.render('albums/show', {
                    albums: albums
                })
            })
    },
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        Album.create(req.body).then(() => {
            res.redirect(`/albums`)
        })
    },

    edit: (req, res) => {
        Album.findById(req.params.albumsId).then(albums => {
            res.render('albums/edit', {
                albums: albums
            })
        })
    },

    // update: (req, res) => {
    //     User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedUser) => {
    //         console.log(updatedUser)
    //         res.redirect(`/users/${updatedUser._id}`)
    //     })
    // },
    // delete: (req, res) => {
        
    //     User.findByIdAndRemove(req.params.usersId).then(() => {
    //         res.redirect('/users')
    //     })
    // }


}
module.exports = albumsController