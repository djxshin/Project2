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
        const userId = req.params.usersId
        User.findById(userId)
        .then(users => {
        res.render('albums/new', {
            users: users
        } )
        })
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
        const usersId = req.params.usersId
        User.findById(usersId)
        .then(user =>{
            Album.create(req.body).then(() => {
                res.redirect(`/users/${usersId}/albums`)
            })
        })
 // req.body is just a JS object with data from the form
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