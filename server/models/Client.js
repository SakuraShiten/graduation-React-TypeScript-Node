const { Schema, model } = require('mongoose')

const schema = new Schema({
    fio: { type: String, required: true },
    tel: { type: String, required: true },
    mail: { type: String, required: true }
}, { versionKey: false })

module.exports = model('Client', schema)