const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "name": String,
    values: {
        "north": Number,
        "east": Number,
        "south": Number,
        "west": Number,
    },
    "element": String,
    "level": Number,
    "visual": String,


}, { collection: 'card', versionKey: false });

module.exports = mongoose.model('User', cardSchema);