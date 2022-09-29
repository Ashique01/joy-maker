const mongoose = require('mongoose')

const mediScheama = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})

const mediModel = mongoose.model('medicines', mediScheama)

module.exports = mediModel;