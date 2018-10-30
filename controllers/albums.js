const Album = require('../models/Album')
const User= require('../models/User')

const albumsController = {
    index: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate('Favorite_Albums')
        .then((user)  => {
            
                res.render('albums/index', {
                    user: user
                })
            }) 
        },
    new: (req, res) => {
        res.render('albums/new')
    },
    show: (req, res) => {
        const usersId = req.params.usersId
        User.findById(usersId).populate('albums')
            .then((albums) => {
                
                res.render('albums/show', {
                    albums: albums
                })
            })
    },
    create: (req, res) => {
        User.findById(usersId)
        const usersId = req.params.usersId
        
        // req.body is just a JS object with data from the form
        User.create(req.body).then(() => {
            res.redirect(`/users/userId/albums`)
        })
    },

    edit: (req, res) => {
        User.findById(req.params.usersId).then(albums => {
            res.render('albums/edit', {
                albums: albums
            })
        })
    },

    update: (req, res) => {
        User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedAlbums) => {
            console.log(updatedAlbums)
            res.redirect(`/albums/${updatedAlbums._id}`)
        })
    },
    delete: (req, res) => {
        
        User.findByIdAndRemove(req.params.usersId).then(() => {
            res.redirect('/albums')
        })
    }


}
module.exports = albumsController