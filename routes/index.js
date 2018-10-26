var express = require('express');
var router = express.Router();
const applicationController = require('../controllers/applications')
const usersController = require('../controllers/users')
const albumsController = require('../controllers/albums')
const tracksController = require('../controllers/tracks')



/* GET home page. */
router.get('/', applicationController.index)



router.get('/users', usersController.index)


router.get('/albums', albumsController.index)

router.get('/tracks', tracksController.index)

module.exports = router;
