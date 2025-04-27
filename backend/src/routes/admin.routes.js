const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/admin.controller'); // Ensure you have the controller created

// Admin login route
router.post('/admin/login', login);
router.post('/admin/register', register);


module.exports = router;
