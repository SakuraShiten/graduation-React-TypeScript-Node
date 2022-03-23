const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    service: { type: String, required: true },
    data: { type: String, required: true },
    time: { type: String, required: true },
    about: { type: String, required: true },
    status: { type: String, default: 'зарезервировано', required: true },
    ownerClient: { type: Types.ObjectId, required: true, ref: 'Client' },
    ownerUser: { type: Types.ObjectId }
}, { versionKey: false })

module.exports = model('Booking', schema)