const express = require('express');
const asyncHandler = require('express-async-handler');
const { Event, Ticket } = require('../../db/models/');
const router = express.Router();

router.get('/users/:id', asyncHandler( async(req, res) => {
    const id = req.params.id;
    const registeredEvents = await Ticket.findAll(
        {
            where: {userId: id},
            include: {model: Event},
            order: [["id", 'DESC']]
        }
    );
    return res.json(registeredEvents)
}))

router.post('/events/:id', asyncHandler( async (req, res) => {
    // const id = req.params.id;
    const { userId, eventId } = req.body;
    const ticket = await Ticket.create({userId, eventId});
    res.json(ticket)
}))
module.exports = router