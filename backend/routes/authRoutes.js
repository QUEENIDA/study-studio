const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login); // Add this line
router.post('/role', setRole);

module.exports = router;
