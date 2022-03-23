const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    header: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true },
    body: { type: String, required: true },
    img: { type: String, required: true },
    owner: { type: Types.ObjectId, required: true }
}, { versionKey: false })

module.exports = model('News', schema)