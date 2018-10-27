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
        res.send("Hey this is new route on stores")
    },
    show: (req, res) => {
        const userId = req.params.userId
        User.findById(userId).populate('albums')
            .then((user) => {
                res.render('users/show', { user: user })
            })
    }
    
}
module.exports = usersController


