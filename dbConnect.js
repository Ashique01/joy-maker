const mongoose = require('mongoose');
const url = 'mongodb+srv://riko01:riko01@cluster0.oqp9s.mongodb.net/joy-maker'

mongoose.connect(url)

let connectionobj = mongoose.connection

connectionobj.on('connected', () => {
    console.log('mongodb connection was successful')
})

connectionobj.on('error', () => {
    console.log('mongodb connection was failed')
})