const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    
    category: {
        required: true,
        type: String
    },
    manufaturer: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    upc: {
        type: String
    },
    serial_number: {
        type: String
    },
    grade: {
        required: true,
        type: String
    },
    packing: {
        type: String
    },
    buy_price:{
        type: Number
    },
    qty:{
        type: Number
    },
    buy_date: {
        type: Date
    },
    est_retail_price: {
        type: Number
    },
    sale_price: {
        type: Number
    },
    sale_date: {
        type: Date
    },
    observation: {
        type: String
    },

})

module.exports = mongoose.model('Data', dataSchema)