const express = require('express');
const asyncHandler = require('express-async-handler');
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
  check('date')
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
    return res.json(singleEvent)
}));

// Create a new event
router.post('/', eventValidation, asyncHandler(async(req,res) => {
  // const {id} = req.user;
  console.log("------------------", req.user)
  console.log("---------------", req.body)
  // const id = 1
  const {name, description, imageUrl, date, location, userId} = req.body
  const event = await Event.create({
    userId,
    name,
    description,
    imageUrl,
    date,
    location
  });
  res.json(event)
}))

router.put('/:id(\\d+)/update', requireAuth, eventValidation, asyncHandler(async (req,res) => {
  const validateErrors = validationResult(req)
 const {id} = req.user;
 console.log('-------------------------', req.user)
 const eventId = parseInt(req.params.id, 10);
 const updatedEvent = await Event.findByPk(eventId)
 const userId = updatedEvent.userId;
 const {name, description, imageUrl, date, location} = req.body
 if (id === userId) {
   if (validateErrors.isEmpty()) {
     const event = await updatedEvent.update({name, description, imageUrl, date, location});
     await updatedEvent.save()
     return res.json(event)
   } else {
     res.json(validateErrors)
   }
 }
}))

router.delete('/:id(\\d+)/remove', requireAuth, asyncHandler(async (req,res) => {
  const eventId = parseInt(req.params.id, 10);
  const removeEvent = await Event.findByPk(eventId)
  const userId = removeEvent.userId;
  const { id } = req.user
  console.log('*******************', req.user)
  if (id === userId) {
    await removeEvent.destroy();
    return res.json("Event successfully removed!")
  } else return res.status(401).json({ errors: ['Unauthorized.'] });
}))
module.exports = router