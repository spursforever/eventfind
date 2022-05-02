const express = require('express');
const asyncHandler = require('express-async-handler');
const Sequelize = require('sequelize');
const { check, validationResult } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')
const router = express.Router()
const { Event } = require('../../db/models')
const eventValidation = [
    check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an event name.'),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an event description.'),
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an image URL of the event.'),
  check('eventDate')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a date of the event.'),
  check('location')
    .exists({ checkFalsy: true })
    .withMessage("Please provide event's location."), 
    handleValidationErrors
]

//  Display all events on homepage
router.get('/', asyncHandler(async(req,res) => {
    const allEvents = await Event.findAll();
    return res.json(allEvents);
}))

// Display a specific event 
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    let eventId = parseInt(req.params.id, 10);
    let singleEvent = await Event.findByPk(eventId);
    return res.json(eventId)
}));

module.exports = router