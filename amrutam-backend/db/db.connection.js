const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = process.env.MONGODB

const initializaDatabase =async ()=>{
    await mongoose
    .connect(mongoURI)
    .then(()=>{
        console.log('Database is connected.')
    }).catch(()=>{
        console.log('Error connecting to database.')
    })
}

module.exports = {initializaDatabase}