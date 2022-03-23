const Client = require('../models/Client')

class clientController {
    async create(req, res) {
        const { fio, tel, mail } = req.body
        const client = new Client({ fio, tel, mail })
        await client.save()
        return res.json(client)
    }
    async getAll(req, res) {
        const clients = await Client.find()
        return res.json(clients)
    }
}

module.exports = new clientController()