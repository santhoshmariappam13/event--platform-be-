
const express = require('express');
const { processPayment } = require('../controllers/paymentController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/process', authMiddleware, processPayment);

module.exports = router;
