const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fio: { type: String, required: true },
    role: { type: String, required: true, default: "MODER" },
}, { versionKey: false })
module.exports = model('User', schema)
