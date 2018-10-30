const Album = require('../models/Album')
const User= require('../models/User')

const albumsController = {
    index: (req, res) => {
        Album.find().then((albums)  => {
                res.render('albums/index', {
                    albums: albums

                })
            }) 
        }
    // new: (req, res) => {
    //     res.render('users/new')
    // },
    // show: (req, res) => {
    //     const userId = req.params.usersId
    //     User.findById(userId).populate('albums')
    //         .then((user) => {
    //             console.log(user)
    //             res.render('users/show', {
    //                 user: user
    //             })
    //         })
    // },
    // create: (req, res) => {
    //     // req.body is just a JS object with data from the form
    //     User.create(req.body).then(() => {
    //         res.redirect(`/users`)
    //     })
    // },

    // edit: (req, res) => {
    //     User.findById(req.params.usersId).then(use => {
    //         res.render('users/edit', {
    //             use: use
    //         })
    //     })
    // },

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