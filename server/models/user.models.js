const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {type: String, req: true},
    email: {type: String, req: true, unique: true},
    password: {type: String, req: true},
    score: {type: String, req: true}
}, {collection: 'user-data'})

const model = mongoose.model('UserData', User)

module.exports = model
