
const express = require('express')
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models')
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const getImages = await Image.findAll();
    //console.log(getImages)
    res.json(getImages)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const image = await Image.findByPk(id);
    res.json(image)
}))

module.exports = router;

