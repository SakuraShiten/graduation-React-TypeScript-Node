const uuid = require('uuid')
const path = require('path');
const News = require('../models/News')
const User = require('../models/User')
const fs = require('fs')

class newsController {
   async create(req, res) {
      try {
         const { header, body, login, password } = req.body
         const { img } = req.files
         if (!header || !body || !login || !password || !img) return res.json({ message: "Недостаточные данные" })
         const aut = await User.findOne({ login, password })
         if (!aut) return res.json({ message: "не авторизирован" })
         if (aut.role !== ("ADMIN" || "MODER")) return res.json({ message: "нет доступа" })
         let fileName = uuid.v4() + '.' + img.name.split('.').pop()
         img.mv(path.resolve(__dirname, '..', 'static', fileName))
         const news = new News({ header, body, img: fileName, owner: aut._id })
         await news.save()
         return res.json(news)
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
         if (aut.role !== ("ADMIN" || "MODER")) return res.json({ message: "нет доступа" })
         const news = await News.findById(id)
         fs.unlink(path.resolve(__dirname, '..', 'static/', news.img), () => { })
         await News.deleteOne({ _id: id })
         return res.json({ message: `новость с _id:${id} удалена` })
      } catch (e) {
         return res.json(e)
      }
   }
   async getAll(req, res) {
      const news = await News.find()
      return res.json(news.reverse())
   }
}

module.exports = new newsController()