const express = require('express')
const router = new express.Router()

const BlogCtrl = require('../controllers/blog')

router.get('/plans/get_current_plan', BlogCtrl.getBlog),

module.exports = router