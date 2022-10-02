const { Router } = require('express')
const FeaturedGamesController = require('../controllers/FeaturedGamesController')

const router = Router()

const featuredGamesController = new FeaturedGamesController()

router.get('/featured', featuredGamesController.index)

module.exports = router