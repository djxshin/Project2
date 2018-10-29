const User = require('../models/User')

const usersController = {
    index: (req, res) => {
        User.find({}).populate('albums')
            .then((users) => {
                res.render('users/index', {
                    users: users

                })
            })
    },
    new: (req, res) => {
        res.render('users/new')
    },
    show: (req, res) => {
        const userId = req.params.usersId
        User.findById(userId).populate('albums')
            .then((user) => {
                res.render('users/show', {
                    user: user
                })
            })
    },
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.create(req.body).then(() => {
            res.redirect(`/users`)
        })
    },

    edit: (req, res) => {
        User.findById(req.params.usersId).then(use => {
            res.render('users/edit', {
                use: use
            })
        })
    },

    update: (req, res) => {
        User.findByIdAndUpdate(req.params.usersId, req.body).then((updatedUser) => {
            res.redirect(`/users/${updatedUser._id}`)
        })
    }


}
module.exports = usersController