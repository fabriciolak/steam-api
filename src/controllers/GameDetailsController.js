const api = require('../api/axiosapi')

class GameDetailsController {
    async index(req, res) {
        try {
            const { appId } = req.params
            const region = req.query.cc || 'br'
            const language = req.query.l || 'portuguese'
            
            const gameResponse = await api.get(`/appdetails?appids=${appId}&cc=${region}&l=${language}`)

            return res.status(200).json(gameResponse.data)
        } catch (error) {
            res.status(404).json({
                app: req.params.appId,
                message: error.message
            })
        }
    }


}

module.exports = GameDetailsController