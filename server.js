require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./src/routes/index')
app.use(routes)

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const methodNotAllowed = require('./src/middlewares/methodNotAllowed')

app.use('/', methodNotAllowed)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server running: http://localhost:'+port))