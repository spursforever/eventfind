const express = require('express');
const Sequelize = require('sequelize');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')
const router = express.Router()
const { Event, Ticket, User, Tag } = require('../../db/models')
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3")
const Op = Sequelize.Op

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
router.get('/', asyncHandler(async (req, res) => {
  const allEvents = await Event.findAll();
  return res.json(allEvents);
}))

// Display a specific event 
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  let eventId = parseInt(req.params.id, 10);
  let singleEvent = await Event.findByPk(eventId,
    {
      include: [User, { model: Ticket, include: User }]
    });
  console.log("--,-,--,-,-,-,-,-,-,", singleEvent)
  return res.json(singleEvent)
}));

// Create a new event
router.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
 
  const { name, description, date, location, user_Id } = req.body
  const imageUrl = await singlePublicFileUpload(req.file);
  const event = await Event.create({
    userId: user_Id,
    name,
    description,
    imageUrl,
    date,
    location
  });
  return res.json(event)
}))

router.put('/:id(\\d+)/update', requireAuth, eventValidation, asyncHandler(async (req, res) => {
  const validateErrors = validationResult(req)
  const { id } = req.user;
  const eventId = parseInt(req.params.id, 10);
  const updatedEvent = await Event.findByPk(eventId)
  const userId = updatedEvent.userId;
  const { name, description, imageUrl, date, location } = req.body
  if (id === userId) {
    if (validateErrors.isEmpty()) {
      const event = await updatedEvent.update({ name, description, imageUrl, date, location });
      await updatedEvent.save()
      return res.json(event)
    } else {
      res.json(validateErrors)
    }
  }
}))

router.delete('/:id(\\d+)/remove', requireAuth, asyncHandler(async (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const removeEvent = await Event.findByPk(eventId)
  const userId = removeEvent.userId;
  const { id } = req.user
  if (id === userId) {
    await removeEvent.destroy();
    return res.json("Event successfully removed!")
  } else return res.status(401).json({ errors: ['Unauthorized.'] });
}))

router.get('/category/:categoryId', asyncHandler(async (req, res) => {

  let categoryId = parseInt(req.params.categoryId, 10);
  
  let categoryList = await Tag.findAll({
      where: {categoryId: categoryId},
      include: {model: Event}
  });

  return res.json(categoryList.map(tag => tag.Event));
}));

router.get('/search/:keyword', asyncHandler( async(req, res) => {
  let keyword = req.params.keyword;
  let events = await Event.findAll({
    where: {
      name: {
        [Op.iLike]: `%${keyword}%`
      }
    }
  })
  return res.json(events)
}));

module.exports = router