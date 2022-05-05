const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Event, Ticket } = require('../../db/models/');
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