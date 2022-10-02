const Steam = require('steamapi')
const steam = new Steam(process.env.STEAM_KEY)

module.exports = steam