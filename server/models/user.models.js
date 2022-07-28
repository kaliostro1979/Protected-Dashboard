const mongoose = require('mongoose')

const User = new mongoose.Schema({
    email: {type: String, req: true, unique: true},
    password: {type: String, req: true},
    score: {type: Object}
}, {collection: 'user-data'})

const model = mongoose.model('UserData', User)

module.exports = model
