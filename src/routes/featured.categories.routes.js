const { Router } = require('express')
const FeaturedCategoriesController = require('../controllers/FeaturedCategoriesController')

const router = Router()

const featuredCategoriesController = new FeaturedCategoriesController()

router.get('/featuredcategories', featuredCategoriesController.index)

module.exports = router