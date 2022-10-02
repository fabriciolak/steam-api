const api = require('../api/steamapi')

class FeaturedGamesController {
    async index(req, res) {
        try {
            const { appId } = req.params
            const featuredResponse = await steam.getFeaturedGames(appId)

            return res.status(200).json(featuredResponse)
        } catch (error) {
            return res.status(200).json({ m: error.message })
        }
    }
}

module.exports = FeaturedGamesController