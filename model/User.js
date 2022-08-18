const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true,
        enum: ['Admin','Editor', 'User'],
        default:'User'
    },
    email: {
        type: String,
    },
    num: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);