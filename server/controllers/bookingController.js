const { find } = require('../models/Booking')
const Booking = require('../models/Booking')
const User = require('../models/User')
const Client = require('../models/Client')

class bookingController {

    async create(req, res) {
        const { service, data, time, about, id } = req.body
        console.log(service, data, time, about, id)
        const booking = new Booking({ service, data, time, about, ownerClient: id })
        await booking.save()
        return res.json(booking)
    }

    async getAll(req, res) {
        const bookings = await Booking.find().populate('ownerClient')
        console.log("asdasd")
        return res.json(bookings)
    }

    async cancel(req, res) {
        const { id, login, password } = req.body
        const aut = await User.findOne({ login, password })
        await Booking.findByIdAndUpdate(id, { ownerUser: aut._id, status: "отменён" })
        return res.json({ message: `заказ отменён` })
    }
    async getSpacesTime(req, res) {
        const { day } = req.body
        const booking = await Booking.find({ data: day })
        const busy = [...booking.map(e => JSON.parse(e.time)).flat()]
        const space = [18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6].filter(el => !busy.includes(el))
        return res.json(space)
    }
}

module.exports = new bookingController()