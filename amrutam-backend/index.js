const express = require('express')
const app = express()

const cors = require('cors')
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

const {initializaDatabase} = require('./db/db.connection.js')
app.use(express.json())

initializaDatabase()

app.get("/", (req, res)=>{
    res.json("Welcome to amrutam backend")
})

const productRouter = require('./routes/productRoute.js')

app.use('/api/all-products', productRouter)

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})

module.exports = app