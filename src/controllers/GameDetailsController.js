const Steam = require('steamapi')
const AppError = require('../utils/ServiceError')
const steam = new Steam(process.env.STEAM_KEY)

class GameDetailsController {
    async index(req, res) {
        try {
            const { appId } = req.params

            const gameResponse = await steam.getGameDetails(String(appId), false, 'br')
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