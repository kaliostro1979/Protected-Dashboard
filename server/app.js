const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = "3001"
const User = require('./models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Altair:05507Misha3343@cluster0.zl4tna4.mongodb.net/?retryWrites=true&w=majority')

app.post('/api/register', async (req, res)=>{
    try {
        const hushedPassword = await bcrypt.hash(req.body.password, 15)
        await User.create({
            email: req.body.email,
            password: hushedPassword
        })
        res.json({status: 'success'})
    }catch (error){
        res.json({status: 'error', error: 'Email already exist'})
    }
})

app.post('/api/login', async (req, res)=>{
    const user = await User.findOne({
        email: req.body.email
    })

    console.log(user);

    const validPass = await bcrypt.compare(req.body.password, user.password)

    if (validPass){
        const token = jwt.sign({email: user.email}, 'secret123')
        return res.json({status: 'success', user: token, score: user.score})
    }else {
        return res.json({status: 'error', user: false})
    }
})

app.get('/api/dashboard', async (req, res)=>{
    const token = req.headers['x-access-token']
    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email})
        return res.json({status: 'success'})
    }catch (error){
        console.log(error)
        res.json({status: 'error', error: 'Invalid token'})
    }
})

app.get('/api/score', async (req, res)=>{
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user = await User.findOne({email: email})
        return res.json({status: 'success', score: user.score})
    }catch (error){
        console.log(error)
        res.json({status: 'error', error: 'Invalid token'})
    }
})




app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})
