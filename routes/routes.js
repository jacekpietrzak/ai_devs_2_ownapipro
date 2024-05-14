const { Router } = require('express');
const router = Router();

const answerRoute = require('./answerRoute');

router.use('/answer', answerRoute);

module.exports = router;
