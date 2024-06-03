const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('User', userSchema)

 