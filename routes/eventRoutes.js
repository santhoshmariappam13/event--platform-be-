
const express = require('express');
const { createEvent, getEvents, getEventById } = require('../controllers/eventController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById); 

module.exports = router;
