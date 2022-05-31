require('dotenv').config()
const express = require('express')
const connectDb = require('./db/connectDb')

const app = express()
const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDb(process.env.MONGODB__CONNECT)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()