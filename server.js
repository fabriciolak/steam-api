require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./src/routes/index')
app.use(routes)

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = 3000 || 5000
app.listen(port, () => console.log('Server running: http://localhost:'+port))