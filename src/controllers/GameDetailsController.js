const api = require('../api/steamapi')

class GameDetailsController {
    async index(req, res) {
        try {
            const { appId } = req.params
            const region = req.query.cc || 'br'

            const gameResponse = await api.getGameDetails(String(appId), false, region)
            return res.status(200).json(gameResponse)
        } catch (error) {
            res.status(404).json({
                app: req.params.appId,
                message: error.message
            })
        }
    }
}

module.exports = GameDetailsController