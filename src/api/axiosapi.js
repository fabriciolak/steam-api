const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://store.steampowered.com/api',
})

module.exports = api