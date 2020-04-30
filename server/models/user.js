const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [
            true, 'please enter your Email!'
        ]
    },
    password: {
        type: String,
        required: [
            true, 'please enter your password!'
        ]
    },

    adminCode: ['admin'],
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema, 'users')