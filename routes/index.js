var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/applications')
const usersController = require('../controllers/users')
const albumsController = require('../controllers/albums')
const tracksController = require('../controllers/tracks')



/* GET home page. */
router.get('/', applicationController.index)



// INDEX
router.get('/users', usersController.index)
// NEW
router.get('/users/new', usersController.new)
// SHOW
router.get('/users/:usersId', usersController.show)

// CREATE
router.post('/users', usersController.create)
// EDIT
router.get('/users/:usersId/edit', usersController.edit)
// UPDATE
router.put('/users/:usersId', usersController.update)
// DELETE
router.delete('/users/:usersId', usersController.delete)


// INDEX
router.get('/users/:usersId/albums', albumsController.index)
// NEW
router.get('/users/:usersId/albums/new', albumsController.new)
// SHOW
router.get('/users/:usersId/albums/:albumsId', albumsController.show)
// CREATE
router.post('/users/:usersId/albums', albumsController.create)
// EDIT
router.get('/users/:usersId/albums/edit', albumsController.edit)
// UPDATE
router.put('/users/:usersId/albums/:albumsId', albumsController.update)
// DELETE
router.delete('/users/:usersId/albums/:albumsId', albumsController.delete)





// INDEX
router.get('/tracks', tracksController.index)
// // NEW
// router.get('/users/new', usersController.new)
// SHOW
// router.get('/tracks/:tracksId/tracks/:tracksId', tracksController.show)

// // CREATE
// router.post('/users', usersController.create)
// // EDIT
// router.get('/users/:usersId/edit', usersController.edit)
// // UPDATE
// router.put('/users/:usersId', usersController.update)
// // DELETE
// router.delete('/users/:usersId', usersController.delete)





module.exports = router;