
const express = require('express');
const { registerForEvent } = require('../controllers/registrationController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const router = express.Router();

router.post('/', authMiddleware, registerForEvent);

module.exports = router;
