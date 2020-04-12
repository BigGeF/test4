const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'please enter a name!'],
        unique: true
    },
    price: {
        type: String,
        required: [true, 'please enter a price!']
    },
    des: {
        type: String,
        required: [true, 'please enter a description!']
    },
}, { timestamps: true });

module.exports = mongoose.model('event', eventSchema, 'events')