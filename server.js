require('dotenv').config()
const express = require('express')
const app = express()

const routes = require('./src/routes/index')
app.use(routes)

const port = 3000 || 5000
app.listen(port, () => console.log('Server running: http://localhost:'+port))