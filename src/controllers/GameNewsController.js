const api = require('../api/steamapi')

class GameNewsController {
    async index(req, res) {
        try {
            const { appId } = req.params

            const newsResponse = await api.getGameNews(appId)

            return res.status(200).json(newsResponse)
        } catch (error) {
            res.status(404).json({m: error.message})
        }
    }
}

module.exports = GameNewsController