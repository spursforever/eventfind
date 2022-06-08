const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imageRouter = require('./images.js')

router.use('/session', sessionRouter);
router.use('/images', imageRouter)
router.use('/users', usersRouter);


module.exports = router;