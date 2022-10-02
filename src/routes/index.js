const { Router } = require('express')

const router = Router()

const appRoutes = require('./app.routes')
const newsRoutes = require('./news.routes')
const featuredRoutes = require('./featured.routes')
const featuredCategoriesRoutes = require('./featured.categories.routes')

router.use('/', appRoutes)
router.use('/', newsRoutes)
router.use('/', featuredRoutes)
router.use('/', featuredCategoriesRoutes)


module.exports = router