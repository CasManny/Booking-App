const express = require('express')
const { createHotel, updateHotel, getAllHotels, deleteHotel, getSingleHotel } = require('../controllers/hotels')
const router = express.Router()

router.route('/').post(createHotel).get(getAllHotels)
router.route('/:id').put(updateHotel).delete(deleteHotel).get(getSingleHotel)

module.exports = router