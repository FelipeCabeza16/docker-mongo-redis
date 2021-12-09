const express = require('express')
const router = new express.Router()

const BlogCtrl = require('../controllers/blog')

router.get('/blogs/', BlogCtrl.getBlog),
router.post('/blogs/', BlogCtrl.postBlog),


module.exports = router