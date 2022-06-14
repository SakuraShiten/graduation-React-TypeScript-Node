const User = require('../models/User')

class userController {
    async create(req, res) {
        try {
            const { login, password, fio } = req.body
            const candidate = await User.findOne({ login })
            if (candidate) return res.json({ message: "такой пользователь уже существует" })
            if (!login || !password || !fio) return res.json({ message: "некорректные данные" })
            const user = new User({ login, password, fio })
            await user.save()
            return res.json(user)
        } catch (e) {
            return res.json(e)
        }
    }
    async delete(req, res) {
        try {
            const { id, login, password } = req.body
            if (!id || !login || !password) return res.json({ message: "некорректные данные" })
            const aut = await User.findOne({ login, password })
            if (!aut) return res.json({ message: "не авторизирован" })
            if (aut.role !== "ADMIN") return res.json({ message: "нет доступа" })
            await User.deleteOne({ _id: id })
            return res.json({ message: `пользователь ${id} удалён` })
        } catch (e) {
            return res.json(e)
        }
    }
    async getAll(req, res) {
        const users = await User.find({ role: { $ne: "ADMIN" } });
        return res.json(users)
    }
    async get(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.findOne({ login, password });
            return res.json(user)
        } catch (e) {
            return res.json(e)
        }
    }
    async check(req, res) {
        try {
            const { login, password } = req.body
            const user = await User.find({ login: login, password: password });
            console.log(user)
            if (user.length)
                return res.json(true)
            else
                return res.json(false)
        } catch (e) {
            return res.json(e)
        }
    }
}

module.exports = new userController()