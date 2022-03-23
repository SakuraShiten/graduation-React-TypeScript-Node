const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    mail: { type: String, required: true },
    owner: { type: Types.ObjectId, required: true }
}, { versionKey: false })

module.exports = model('Notice', schema)