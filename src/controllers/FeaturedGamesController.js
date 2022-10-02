const api = require('../api/axiosapi')

class FeaturedGamesController {
    async index(req, res) {
        try {
            const { appId } = req.params
            const region = req.query.cc || 'br'
            const language = req.query.l || 'portuguese'

            const featuredResponse = await api.get(`/featured?cc=${region}`)

            return res.status(200).json(featuredResponse.data)
        } catch (error) {
            return res.status(200).json({ m: error.message })
        }
    }
}

module.exports = FeaturedGamesController