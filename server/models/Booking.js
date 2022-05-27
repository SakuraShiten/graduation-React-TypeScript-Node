const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    about: { type: String, default: "" },
    status: { type: String, default: 'зарезервировано', required: true },
    ownerClient: { type: Types.ObjectId, required: true, ref: 'Client' },
    ownerUser: { type: Types.ObjectId, ref: 'User' }
}, { versionKey: false })

module.exports = model('Booking', schema)