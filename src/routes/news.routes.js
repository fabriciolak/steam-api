const { Router } = require('express')
const GameNewsController = require('../controllers/GameNewsController')

const router = Router()

const gameNewsController = new GameNewsController()

router.get('/news/:appId', gameNewsController.index)

module.exports = router