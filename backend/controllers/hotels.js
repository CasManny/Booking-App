const Hotel = require('../models/hotel')
const createError = require('../utils/error')

// create Hotels

const createHotel = async (req, res, next) => {
    const newHotel = req.body
    try {
        const hotel = await Hotel.create(newHotel)
        res.status(201).json(hotel)
    } catch (error) {
        next(createError(500, 'Server Error'))
    }
}


// update Hotels

const updateHotel = async (req, res, next) => {
    const { id } = req.params
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(createError(500, 'server Error'))
    }
}

// Get all hotels

const getAllHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({})
        res.status(200).json({hotels, nbOfHotels: hotels.length})
    } catch (error) {
        next(createError(500, 'server Error'))

    }
}

// Delete Hotel

const deleteHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({status: 'success', message: 'Hotel has been deleted'})
    } catch (error) {
        next(createError(500, 'server Error'))

    }
}

// Get single hotel

const getSingleHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(createError(500, 'server Error'))

    }
}
module.exports = { createHotel, updateHotel, getAllHotels, deleteHotel, getSingleHotel }