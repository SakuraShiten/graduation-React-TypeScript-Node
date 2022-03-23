const User = require('../models/User')

class userController {
    async create(req, res) {
        const { login, password, fio } = req.body
        const candidate = await User.findOne({ login })
        if (candidate) return res.json({ message: "такой пользователь уже существует" })
        if (!login || !password || !fio) return res.json({ message: "некорректные данные" })
        const aut = await User.findOne({ login, password })
        if (!aut) return res.json({ message: "не авторизирован" })
        if (aut.role !== "ADMIN") return res.json({ message: "нет доступа" })
        const user = new User({ login, password, fio })
        await user.save()
        return res.json(user)
    }
    async delete(req, res) {
        const { deleteLogin, login, password } = req.body
        if (!deleteLogin || !login || !pass) return res.json({ message: "некорректные данные" })
        const candidate = await User.findOne({ login: deleteLogin })
        if (!candidate) return res.json({ message: "такой пользователь уже существует" })
        const aut = await User.findOne({ login, password })
        if (!aut) return res.json({ message: "не авторизирован" })
        if (aut.role !== "ADMIN") return res.json({ message: "нет доступа" })
        await User.deleteOne({ login: deleteLogin })
        return res.json({ message: `пользователь ${deleteLogin} удалён` })
    }
    async getAll(req, res) {
        const { login, password } = req.body
        const users = await User.find();
        return res.json(users)
    }
    async check(req, res) {
        const { login, password } = req.body
        const user = await User.find({ login: login, password: password });
        console.log(user)
        if (user.length)
            return res.json(true)
        else
            return res.json(false)
    }
}

module.exports = new userController()