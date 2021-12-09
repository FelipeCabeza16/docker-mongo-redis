const express = require('express')
const router = new express.Router()

const BlogCtrl = require('../controllers/blog')

router.get('/blogs/mongo', BlogCtrl.getBlogsByMongo),
router.get('/blogs/redis', BlogCtrl.getBlogsByRedis),

router.get('/blogs/mongo/:id', BlogCtrl.getBlogByIDMongo),
router.get('/blogs/redis/:id', BlogCtrl.getBlogByIDRedis),

router.post('/blogs/', BlogCtrl.postBlog),


module.exports = router