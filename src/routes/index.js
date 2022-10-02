const { Router } = require('express')

const router = Router()

const appRoutes = require('./app.routes')
const newsRoutes = require('./news.routes')

router.use('/', appRoutes)
router.use('/', newsRoutes)


module.exports = router