const Client = require('../models/Client')

class clientController {
    async create(req, res) {
        try {
            const { fio, tel, mail } = req.body
            const client = new Client({ fio, tel, mail })
            await client.save()
            return res.json(client)
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req, res) {
        const clients = await Client.find()
        return res.json(clients.reverse())
    }
}

module.exports = new clientController()