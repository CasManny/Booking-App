require('dotenv').config()
const express = require('express')
const connectDb = require('./db/connectDb')
const serverError = require('./errors/serverError')
const hotelRoutes = require('./routes/hotels')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/hotels', hotelRoutes)
app.use(serverError)


const start = async () => {
    try {
        await connectDb(process.env.MONGODB__CONNECT)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()