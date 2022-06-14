const Notice = require('../models/Notice')
const User = require('../models/User')

class noticeController {
    async create(req, res) {
        try {
            const { mail, login, password } = req.body
            const aut = await User.findOne({ login, password })
            const notice = new Notice({ mail, owner: aut._id })
            await notice.save()
            return res.json(notice)
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.body
            const notice = await Notice.findById(id)
            await Notice.deleteOne({ _id: id })
            return res.json({ message: `Уведомления на почту ${notice.mail} убраны` })
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req, res) {
        const notice = await Notice.find().populate("owner")
        return res.json(notice.reverse())
    }
}

module.exports = new noticeController()