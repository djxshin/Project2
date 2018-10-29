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
        const usersId = req.params.usersId
        User.findById(usersId).populate('Favorite_Albums')
            .then((user) => {
                res.render('users/show', { user: user })
            })
    },
    create: (req, res) => {
        // req.body is just a JS object with data from the form
        User.create(req.body).then(() => {
          res.redirect(`/users`)
        })
      },
    
}
module.exports = usersController


