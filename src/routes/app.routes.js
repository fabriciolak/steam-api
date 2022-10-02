const { Router } = require('express')
const GameDetailsController = require('../controllers/GameDetailsController')

const routes = Router()

const gameDetailsController = new GameDetailsController()

routes.get('/game/:appId', gameDetailsController.index)

module.exports = routes