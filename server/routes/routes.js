const router = require('express').Router();
const controllers = require('../Controllers/controllers');


router.get('/', controllers.get); // get all movies
router.post('/', controllers.post); // add movie
router.put('/:title', controllers.put); //update Watched
router.get('/:title', controllers.getOne); //get 1 movie by search
router.delete('/:title', controllers.del);



module.exports = router; // for app to USE router