const Hotel = require('../models/hotel')

// create Hotels

const createHotel = async (req, res) => {
    const newHotel = req.body
    try {
        const hotel = await Hotel.create(newHotel)
        res.status(201).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}


// update Hotels

const updateHotel = async (req, res) => {
    const { id } = req.params
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get all hotels

const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({})
        res.status(200).json({hotels, nbOfHotels: hotels.length})
    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete Hotel

const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json({status: 'success', message: 'Hotel has been deleted'})
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get single hotel

const getSingleHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = { createHotel, updateHotel, getAllHotels, deleteHotel, getSingleHotel }