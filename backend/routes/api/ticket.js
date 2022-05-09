const express = require('express');
const asyncHandler = require('express-async-handler');
const { Event, Ticket, User } = require('../../db/models/');
const router = express.Router();

router.get('/users/:id', asyncHandler( async(req, res) => {
    const id = req.params.id;
    const registeredEvents = await Ticket.findAll(
        {
            where: {userId: id},
            include: { model: Event },
            order: [["id", 'DESC']]
        }
    );
    return res.json(registeredEvents)
}));

router.post('/events/:id', asyncHandler( async (req, res) => {
    const id = req.params.id;
    const { userId, eventId } = req.body;
    const ticket = await Ticket.create({userId, eventId}, );
    // console.log("----------------", ticket)
    return res.json(ticket)
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const ticket = await Ticket.findByPk(id)     
    await ticket.destroy();
    return res.json(id)
}))
module.exports = router