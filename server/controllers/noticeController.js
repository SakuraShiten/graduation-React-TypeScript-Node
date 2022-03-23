const Notice = require('../models/Notice')
const User = require('../models/User')

class noticeController {
    async create(req, res) {
        const { mail, login, password } = req.body
        const aut = await User.findOne({ login, password })
        const notice = new Notice({ mail, owner: aut._id })
        await notice.save()
        return res.json(notice)
    }
    async delete(req, res) {
        const { id } = req.body
        const notice = await Notice.findById(id)
        await Notice.deleteOne({ _id: id })
        return res.json({ message: `Уведомления на почту ${notice.mail} убраны` })
    }
    async getAll(req, res) {
        const notice = await Notice.find()
        return res.json(notice)
    }
}

module.exports = new noticeController()