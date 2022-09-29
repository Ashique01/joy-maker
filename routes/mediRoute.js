const express = require('express')
const mediModel = require('../models/mediModel')
const router = express.Router()


router.get('/get-all-medis', async (req, res) => {
    try {
        const medis = await mediModel.find()
        res.send(medis)
    } catch (error) {
        res.status(400).json(error)

    }
})
router.post('/add-item', async (req, res) => {
    try {
        const newItem = new mediModel(req.body)
        await newItem.save()
        res.send('Item added successfully')
    } catch (error) {
        res.status(404).json(error)
    }
});

router.post('/edit-item', async (req, res) => {
    try {
        await mediModel.findOneAndUpdate({ _id: req.body.itemId }, req.body)
        res.send('Item edited successfully')
    } catch (error) {
        res.status(404).json(error)
    }
});

router.post('/delete-item', async (req, res) => {
    try {
        await mediModel.findOneAndDelete({ _id: req.body.itemId })
        res.send('Item deleted successfully')
    } catch (error) {
        res.status(404).json(error)
    }
});
module.exports = router