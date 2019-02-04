var express = require('express')

var router = express.Router()
var posts = require('./api/posts.route')


router.use('/posts', posts);


module.exports = router;