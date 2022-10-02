const { Router } = require('express')

const router = Router()

const appRoutes = require('./app.routes')
router.use(appRoutes)


module.exports = router