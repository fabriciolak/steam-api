const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://api.steampowered.com',
})

module.exports = api