const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const chat = require('./modules/chat')

router.use('/chat', chat)
router.use('/', home)

module.exports = router