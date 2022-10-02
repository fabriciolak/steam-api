const { Router } = require('express')

const router = Router()

const appRoutes = require('./app.routes')
const newsRoutes = require('./news.routes')
const featuredRoutes = require('./featured.routes')

router.use('/', appRoutes)
router.use('/', newsRoutes)
router.use('/', featuredRoutes)


module.exports = router