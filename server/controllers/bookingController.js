const { find } = require('../models/Booking')
const Booking = require('../models/Booking')
const User = require('../models/User')
const Client = require('../models/Client')
const sendMail = require('../utils/mailSender')

class bookingController {

    async create(req, res) {
        const { service, date, time, about, id } = req.body

        const booking = new Booking({ service, date, time, about, ownerClient: id })
        await booking.save()
        const client = await Client.findOne({ _id: id })
        sendMail(client.fio, client.tel, client.mail, service, date, time, about)
        return res.json(booking)
    }

    async getAll(req, res) {
        const bookings = await Booking.find().populate('ownerClient').populate('ownerUser')
        return res.json(bookings.reverse())
    }

    async cancel(req, res) {
        const { id, login, password } = req.body
        const aut = await User.findOne({ login, password })
        await Booking.findByIdAndUpdate(id, { ownerUser: aut._id, status: "отменён" })
        return res.json({ message: `заказ отменён` })
    }
    async getSpacesTime(req, res) {
        const { day, service } = req.body
        const booking = await Booking.find({ date: day, service })
        const busy = [...booking.map(e => JSON.parse(e.time)).flat()]
        const space = [18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5].filter(el => !busy.includes(el))
        return res.json(space)
    }
}

module.exports = new bookingController()