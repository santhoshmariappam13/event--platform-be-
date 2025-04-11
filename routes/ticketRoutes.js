
const express = require('express');
const { buyTicket } = require('../controllers/ticketController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', authMiddleware, buyTicket);

module.exports = router;
