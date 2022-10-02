const api = require('../api/axiosapi')

class FeaturedCategoriesController {
    async index(req, res) {
        try {
            const region = req.query.cc || 'br'
            const language = req.query.l || 'portuguese'

            const featuredResponse = await api.get(`/featuredcategories?cc=${region}&l=${language}`)

            return res.status(200).json(featuredResponse.data)
        } catch (error) {
            return res.status(200).json({ m: error.message })
        }
    }
}

module.exports = FeaturedCategoriesController