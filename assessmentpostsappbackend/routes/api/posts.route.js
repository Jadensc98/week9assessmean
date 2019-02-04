var express = require('express')

var router = express.Router()


var PostController = require('../../controller/post.controller.js');


// Map each API to the Controller FUnctions

router.get('/', PostController.getPosts)

router.post('/', PostController.createPost)

router.put('/', PostController.updatePost)

router.delete('/:id', PostController.removePost)

// Export the Router

module.exports = router;